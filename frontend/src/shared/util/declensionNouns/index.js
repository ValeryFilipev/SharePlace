const two = 2;
const four = 4;
const five = 5;
const ten = 10;
const twenty = 20;
const oneHundred = 100;

export const generateCorrectText = (titles, number) => {
  const cases = [two, 0, 1, 1, 1, two];
  const num = number;

  return titles[
    num % oneHundred > four && num % oneHundred < twenty
      ? two
      : cases[num % ten < five ? num % ten : five]
    ];
};
