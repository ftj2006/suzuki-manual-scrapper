// tests/unit/validation.test.js
// Unit tests for data validation functions

describe('Data Validation Functions', () => {
  describe('validateDataset', () => {
    it('should return true for valid dataset with id and manuals array', () => {
      const validDataset = {
        id: 'test-dataset',
        manuals: [
          { id: 'manual1', name: 'Manual 1' },
          { id: 'manual2', name: 'Manual 2' },
        ],
      };

      const result = validateDataset(validDataset);
      expect(result).toBe(true);
    });

    it('should return false for dataset missing id', () => {
      const invalidDataset = {
        manuals: [{ id: 'manual1', name: 'Manual 1' }],
      };

      const result = validateDataset(invalidDataset);
      expect(result).toBe(false);
    });

    it('should return false for dataset missing manuals array', () => {
      const invalidDataset = {
        id: 'test-dataset',
      };

      const result = validateDataset(invalidDataset);
      expect(result).toBe(false);
    });

    it('should return false for non-array manuals', () => {
      const invalidDataset = {
        id: 'test-dataset',
        manuals: 'not-an-array',
      };

      const result = validateDataset(invalidDataset);
      expect(result).toBe(false);
    });

    it('should return false for null or undefined', () => {
      expect(validateDataset(null)).toBe(false);
      expect(validateDataset(undefined)).toBe(false);
    });
  });

  describe('validateTreeNode', () => {
    it('should return true for valid folder node with children', () => {
      const validFolder = {
        type: 'folder',
        label: 'Section 1',
        children: [
          { type: 'file', label: 'File 1', path: './file1.htm' },
        ],
      };

      const result = validateTreeNode(validFolder);
      expect(result).toBe(true);
    });

    it('should return true for valid file node with path and label', () => {
      const validFile = {
        type: 'file',
        label: 'Document',
        path: './document.htm',
      };

      const result = validateTreeNode(validFile);
      expect(result).toBe(true);
    });

    it('should return true for lazy-loaded folder with lazyData', () => {
      const lazyFolder = {
        type: 'folder',
        label: 'Lazy Section',
        lazyData: '[{"type":"file","label":"File","path":"./file.htm"}]',
      };

      const result = validateTreeNode(lazyFolder);
      expect(result).toBe(true);
    });

    it('should return false for node missing type', () => {
      const invalidNode = {
        label: 'No Type Node',
        path: './file.htm',
      };

      const result = validateTreeNode(invalidNode);
      expect(result).toBe(false);
    });

    it('should return false for file without path', () => {
      const invalidFile = {
        type: 'file',
        label: 'File',
        // missing path
      };

      const result = validateTreeNode(invalidFile);
      expect(result).toBe(false);
    });

    it('should return false for folder without children or lazyData', () => {
      const invalidFolder = {
        type: 'folder',
        label: 'Empty Folder',
        // missing both children and lazyData
      };

      const result = validateTreeNode(invalidFolder);
      expect(result).toBe(false);
    });

    it('should return false for null or undefined', () => {
      expect(validateTreeNode(null)).toBe(false);
      expect(validateTreeNode(undefined)).toBe(false);
    });
  });
});

// Helper function implementations for testing
function validateDataset(dataset) {
  if (!dataset || typeof dataset !== 'object') {
    return false;
  }
  if (typeof dataset.id !== 'string') {
    return false;
  }
  if (!Array.isArray(dataset.manuals)) {
    return false;
  }
  return true;
}

function validateTreeNode(node) {
  if (!node || typeof node !== 'object') {
    return false;
  }
  if (typeof node.type !== 'string') {
    return false;
  }
  if (node.type === 'file') {
    return typeof node.path === 'string' && typeof node.label === 'string';
  }
  if (node.type === 'folder') {
    return (
      Array.isArray(node.children) ||
      (typeof node.lazyData === 'string' && node.lazyData.length > 0)
    );
  }
  return false;
}
