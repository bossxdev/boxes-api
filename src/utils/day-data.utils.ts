export const DayOfMonth = (month = "01") => {
  const newMonth = +month - 1;
  const arrData: number[] = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return arrData[newMonth];
};
