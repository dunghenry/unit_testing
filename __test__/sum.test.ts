import { sum } from '../src/sumts';

describe('sum module', () => {
    it('add 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
});
  