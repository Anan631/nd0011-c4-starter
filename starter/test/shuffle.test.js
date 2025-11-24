import { describe, it } from 'mocha';
import { expect } from 'chai';
import { shuffle } from '../src/shuffle.js';

describe('shuffle function', () => {
  it('should shuffle the indexes of an array', () => {
    const original = [1, 2, 3, 4, 5];
    
    // نفذ shuffle عدة مرات للتأكد من أنه يغير الترتيب على الأقل مرة
    let shuffledDifferent = false;
    for (let i = 0; i < 5; i++) {
      const shuffled = shuffle(original);
      if (!original.every((val, idx) => val === shuffled[idx])) {
        shuffledDifferent = true;
        break;
      }
    }

    // طول المصفوفة يجب أن يبقى نفسه
    const shuffled = shuffle(original);
    expect(shuffled).to.have.lengthOf(original.length);
    expect(shuffled.sort()).to.deep.equal(original.sort());

    // الترتيب يجب أن يتغير على الأقل مرة خلال 5 محاولات
    expect(shuffledDifferent).to.be.true;
  });
});
