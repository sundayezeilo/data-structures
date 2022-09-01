import { BST } from '../binary-search-tree';

describe('BST', () => {
  describe('insert', () => {
    it('should insert a new value to the correct place in the tree', () => {
      const tree = new BST<number>();

      tree.insert(10);
      tree.insert(15);
      tree.insert(5);
      tree.insert(30);

      const testRoot = {
        value: 10,
        left: { value: 5, left: null, right: null },
        right: {
          value: 15,
          left: null,
          right: {
            value: 30,
            left: null,
            right: null
          }
        }
      };

      expect(tree.root).toMatchObject(testRoot);
    });
  });

  describe('find', () => {
    it('should return false nothing has been added to the tree', () => {
      const tree = new BST<number>();
      expect(tree.find(5)).toBe(false);
    });

    it('should return true if a record is found on the tree', () => {
      const tree = new BST<number>();
      tree.insert(10);
      tree.insert(15);
      tree.insert(5);
      tree.insert(30);
      expect(tree.find(5)).toBe(true);
      expect(tree.find(30)).toBe(true);
    });

    it('should return false if a record is not found on the tree', () => {
      const tree = new BST<number>();
      tree.insert(10);
      tree.insert(15);
      tree.insert(5);
      tree.insert(30);
      expect(tree.find(13)).toBe(false);
    });
  });

  describe('BFS', () => {
    it('should return a list of values from the traversed nodes, in the correct order', () => {
      //             10
      //      6              15
      //  3       8      11       20
      const tree = new BST<number>();
      
      expect(tree.BFS().length).toBe(0);

      tree.insert(10);
      tree.insert(6);
      tree.insert(3);
      tree.insert(8);
      tree.insert(15);
      tree.insert(11);
      tree.insert(20);

      const result = JSON.stringify([10, 6, 15, 3, 8, 11, 20]);
      const traversed = tree.BFS();
      expect(JSON.stringify(traversed)).toEqual(result);
    });
  });
});
