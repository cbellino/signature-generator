import {Canvas} from './canvas';

export function main() {
  describe('Canvas Service', () => {
    let nameList;

    beforeEach(() => {
      nameList = new Canvas;
    });

    it('should return the list of names', () => {
      // let names = nameList.get();
      // expect(names).toEqual(jasmine.any(Array));
    });
  });
}
