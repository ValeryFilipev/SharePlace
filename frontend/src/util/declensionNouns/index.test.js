import { generateCorrectText } from './';

describe('generateCorrectText', () => {
  const days = ['День', 'Дня', 'Дней'];

  it('should work correctly when 0 is the numeral', () => {
    expect(generateCorrectText(days, 0)).toBe('Дней');
  });

  it('should work correctly when 1 is the numeral', () => {
    expect(generateCorrectText(days, 1)).toBe('День');
  });

  it('should work correctly when 2 is the numeral', () => {
    const two = 2;
    expect(generateCorrectText(days, two)).toBe('Дня');
  });
});
