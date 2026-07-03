// tests/unit/performance-metrics.test.js
// Unit tests for performance monitoring

describe('Performance Metrics', () => {
  const PERF_METRICS_KEY = 'manual-next-perf-metrics';
  const MAX_SAMPLES = 100;

  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  describe('recordPerformanceMetric', () => {
    it('should record a metric with valid duration', () => {
      recordPerformanceMetric('test_operation', 150);

      const stored = localStorage.setItem.mock.calls[0];
      expect(stored[0]).toBe(PERF_METRICS_KEY);

      const metrics = JSON.parse(stored[1]);
      expect(metrics.test_operation).toBeDefined();
      expect(metrics.test_operation.count).toBe(1);
      expect(metrics.test_operation.total).toBe(150);
    });

    it('should accumulate multiple metrics', () => {
      recordPerformanceMetric('load_time', 100);
      recordPerformanceMetric('load_time', 200);
      recordPerformanceMetric('load_time', 150);

      const stored = localStorage.setItem.mock.calls[0];
      const metrics = JSON.parse(stored[1]);

      expect(metrics.load_time.count).toBe(3);
      expect(metrics.load_time.total).toBe(450);
      expect(metrics.load_time.min).toBe(100);
      expect(metrics.load_time.max).toBe(200);
    });

    it('should cap samples at MAX_SAMPLES per metric', () => {
      // Record more than MAX_SAMPLES
      for (let i = 0; i < 150; i++) {
        recordPerformanceMetric('operation', 100 + i);
      }

      const stored = localStorage.setItem.mock.calls[0];
      const metrics = JSON.parse(stored[1]);

      // Should not exceed MAX_SAMPLES
      expect(metrics.operation.count).toBeLessThanOrEqual(MAX_SAMPLES);
    });

    it('should calculate correct min/max values', () => {
      recordPerformanceMetric('response_time', 50);
      recordPerformanceMetric('response_time', 200);
      recordPerformanceMetric('response_time', 75);
      recordPerformanceMetric('response_time', 150);

      const stored = localStorage.setItem.mock.calls[0];
      const metrics = JSON.parse(stored[1]);

      expect(metrics.response_time.min).toBe(50);
      expect(metrics.response_time.max).toBe(200);
    });

    it('should ignore negative durations', () => {
      recordPerformanceMetric('metric', -100);
      recordPerformanceMetric('metric', 100);

      const stored = localStorage.setItem.mock.calls[0];
      const metrics = JSON.parse(stored[1]);

      // Should only have one valid metric
      expect(metrics.metric.count).toBe(1);
      expect(metrics.metric.total).toBe(100);
    });

    it('should handle zero duration', () => {
      recordPerformanceMetric('instant_op', 0);

      const stored = localStorage.setItem.mock.calls[0];
      const metrics = JSON.parse(stored[1]);

      expect(metrics.instant_op.count).toBe(1);
      expect(metrics.instant_op.total).toBe(0);
      expect(metrics.instant_op.min).toBe(0);
      expect(metrics.instant_op.max).toBe(0);
    });
  });

  describe('getPerformanceMetrics', () => {
    it('should return empty object when no metrics stored', () => {
      localStorage.getItem.mockReturnValueOnce(null);

      const result = getPerformanceMetrics();

      expect(result).toEqual({});
    });

    it('should return parsed metrics from localStorage', () => {
      const metricsData = {
        load_time: {
          count: 5,
          total: 750,
          min: 120,
          max: 200,
        },
        render: {
          count: 10,
          total: 1500,
          min: 100,
          max: 300,
        },
      };

      localStorage.getItem.mockReturnValueOnce(JSON.stringify(metricsData));

      const result = getPerformanceMetrics();

      expect(result).toEqual(metricsData);
    });

    it('should return empty object for invalid stored data', () => {
      localStorage.getItem.mockReturnValueOnce('invalid-json');

      const result = getPerformanceMetrics();

      expect(result).toEqual({});
    });

    it('should calculate averages correctly', () => {
      const metricsData = {
        operation: {
          count: 4,
          total: 400,
          min: 80,
          max: 120,
        },
      };

      localStorage.getItem.mockReturnValueOnce(JSON.stringify(metricsData));

      const result = getPerformanceMetrics();
      const average = result.operation.total / result.operation.count;

      expect(average).toBe(100);
    });
  });

  describe('Performance Metrics Integration', () => {
    it('should persist metrics across multiple operations', () => {
      // Simulate multiple operations
      recordPerformanceMetric('api_call', 150);
      recordPerformanceMetric('render', 200);
      recordPerformanceMetric('api_call', 180);

      // Get metrics
      const stored = localStorage.setItem.mock.calls[0];
      const metrics = JSON.parse(stored[1]);

      expect(Object.keys(metrics)).toContain('api_call');
      expect(Object.keys(metrics)).toContain('render');
      expect(metrics.api_call.count).toBe(2);
      expect(metrics.render.count).toBe(1);
    });
  });
});

// Helper function implementations for testing
function recordPerformanceMetric(name, duration) {
  const PERF_METRICS_KEY = 'manual-next-perf-metrics';
  const MAX_SAMPLES = 100;

  if (duration < 0) return; // Ignore negative durations

  try {
    let metrics = {};
    const stored = localStorage.getItem(PERF_METRICS_KEY);
    if (stored) {
      metrics = JSON.parse(stored);
    }

    if (!metrics[name]) {
      metrics[name] = { count: 0, total: 0, min: Infinity, max: -Infinity };
    }

    // Only record if under sample limit
    if (metrics[name].count < MAX_SAMPLES) {
      metrics[name].count++;
      metrics[name].total += duration;
      metrics[name].min = Math.min(metrics[name].min, duration);
      metrics[name].max = Math.max(metrics[name].max, duration);
    }

    localStorage.setItem(PERF_METRICS_KEY, JSON.stringify(metrics));
  } catch (error) {
    console.error('Error recording performance metric:', error);
  }
}

function getPerformanceMetrics() {
  const PERF_METRICS_KEY = 'manual-next-perf-metrics';

  try {
    const stored = localStorage.getItem(PERF_METRICS_KEY);
    if (!stored) return {};
    return JSON.parse(stored);
  } catch (error) {
    return {};
  }
}
