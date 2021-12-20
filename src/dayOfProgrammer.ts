/* eslint-disable max-len */
/* eslint-disable no-plusplus */
export default function dayOfProgrammer(year: number): string {
  // Write your code here
  const yearN = [31, 28, 31, 30, 31, 30, 31, 31];
  const yearL = [31, 29, 31, 30, 31, 30, 31, 31];
  let yearsum = 0;
  let leap = '';
  if (year === 1918) {
    leap = `26.09.${year}`;
  } else if ((year < 1918 && year % 4 === 0) || (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    yearsum = yearL.reduce(((a, b) => a + b));
    leap = String(256 - yearsum).concat(`.09.${year}`);
  } else {
    yearsum = yearN.reduce(((a, b) => a + b));
    leap = String(256 - yearsum).concat(`.09.${year}`);
  }
  return leap;
}
