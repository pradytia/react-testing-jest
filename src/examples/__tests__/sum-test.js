import sum from '../sum';

describe('Sum', () => {
  it('should return correct answer', () => {
    let result = sum(2, 2);
    expect(result).toBe(4);
  });
});
