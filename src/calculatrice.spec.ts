const add = (a: number, b: number) => a + b;

describe('Calculatrice', () => {
  it('should return 3', () => {
    expect(add(1, 2)).toBe(3);
  });
});