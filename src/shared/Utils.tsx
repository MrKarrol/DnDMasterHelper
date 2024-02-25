export const generateInt = (minBound: number, maxBound: number) => {
  return Math.floor(Math.random() * (maxBound - minBound + 1) + minBound);
};

export const throwDices = (num: number, dice: number) => {
  console.log("starting roll", num, dice);
  return Array(num)
    .fill(0)
    .map(() => generateInt(1, dice))
    .reduce((acc, value) => {
      console.log(acc, value);
      return acc + value;
    }, 0);
};
