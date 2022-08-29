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
});
