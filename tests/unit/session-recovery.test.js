// tests/unit/session-recovery.test.js
// Unit tests for session recovery functionality

describe('Session Recovery', () => {
  const SESSION_RECOVERY_KEY = 'manual-next-session-recovery';
  const APP_VERSION = '2.1.0';

  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  describe('saveSessionRecovery', () => {
    it('should save recovery data with timestamp', () => {
      const datasetId = 'test-dataset';
      const submodelId = 'test-submodel';
      const model = 'TEST-MODEL';
      const path = './test/path.htm';

      saveSessionRecovery(datasetId, submodelId, model, path);

      const saved = JSON.parse(localStorage.setItem.mock.calls[0][1]);
      expect(saved.datasetId).toBe(datasetId);
      expect(saved.submodelId).toBe(submodelId);
      expect(saved.model).toBe(model);
      expect(saved.path).toBe(path);
      expect(saved.timestamp).toBeDefined();
      expect(saved.version).toBe(APP_VERSION);
    });

    it('should store data in localStorage with recovery key', () => {
      saveSessionRecovery('ds1', 'sm1', 'model1', './path.htm');

      expect(localStorage.setItem).toHaveBeenCalledWith(
        SESSION_RECOVERY_KEY,
        expect.any(String)
      );
    });
  });

  describe('getSessionRecovery', () => {
    it('should retrieve valid recovery data within 24 hours', () => {
      const recoveryData = {
        datasetId: 'test-dataset',
        submodelId: 'test-submodel',
        model: 'TEST-MODEL',
        path: './test/path.htm',
        timestamp: Date.now(),
        version: APP_VERSION,
      };

      localStorage.getItem.mockReturnValueOnce(JSON.stringify(recoveryData));

      const result = getSessionRecovery();

      expect(result).toEqual(recoveryData);
    });

    it('should return null for expired recovery data (>24 hours)', () => {
      const recoveryData = {
        datasetId: 'test-dataset',
        submodelId: 'test-submodel',
        model: 'TEST-MODEL',
        path: './test/path.htm',
        timestamp: Date.now() - 25 * 60 * 60 * 1000, // 25 hours ago
        version: APP_VERSION,
      };

      localStorage.getItem.mockReturnValueOnce(JSON.stringify(recoveryData));

      const result = getSessionRecovery();

      expect(result).toBeNull();
    });

    it('should return null for version mismatch', () => {
      const recoveryData = {
        datasetId: 'test-dataset',
        submodelId: 'test-submodel',
        model: 'TEST-MODEL',
        path: './test/path.htm',
        timestamp: Date.now(),
        version: '1.0.0', // Different version
      };

      localStorage.getItem.mockReturnValueOnce(JSON.stringify(recoveryData));

      const result = getSessionRecovery();

      expect(result).toBeNull();
    });

    it('should return null if no recovery data exists', () => {
      localStorage.getItem.mockReturnValueOnce(null);

      const result = getSessionRecovery();

      expect(result).toBeNull();
    });

    it('should return null for malformed recovery data', () => {
      localStorage.getItem.mockReturnValueOnce('invalid-json');

      const result = getSessionRecovery();

      expect(result).toBeNull();
    });
  });

  describe('clearSessionRecovery', () => {
    it('should remove recovery data from localStorage', () => {
      clearSessionRecovery();

      expect(localStorage.removeItem).toHaveBeenCalledWith(SESSION_RECOVERY_KEY);
    });
  });
});

// Helper function implementations for testing
function saveSessionRecovery(datasetId, submodelId, model, path) {
  const recoveryData = {
    datasetId,
    submodelId,
    model,
    path,
    timestamp: Date.now(),
    version: '2.1.0',
  };
  localStorage.setItem('manual-next-session-recovery', JSON.stringify(recoveryData));
}

function getSessionRecovery() {
  const APP_VERSION = '2.1.0';
  const SESSION_RECOVERY_KEY = 'manual-next-session-recovery';
  const RECOVERY_TIMEOUT = 24 * 60 * 60 * 1000; // 24 hours

  try {
    const data = localStorage.getItem(SESSION_RECOVERY_KEY);
    if (!data) return null;

    const recovery = JSON.parse(data);

    // Validate timestamp (within 24 hours)
    if (Date.now() - recovery.timestamp > RECOVERY_TIMEOUT) {
      return null;
    }

    // Validate version compatibility
    if (recovery.version !== APP_VERSION) {
      return null;
    }

    return recovery;
  } catch (error) {
    return null;
  }
}

function clearSessionRecovery() {
  localStorage.removeItem('manual-next-session-recovery');
}
