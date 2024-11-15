const getNounPluralForm = (a: number): 0 | 1 | 2 => {
  if (a % 10 === 1 && a % 100 !== 11) return 0;
  if (a % 10 >= 2 && a % 10 <= 4 && (a % 100 < 10 || a % 100 >= 20)) return 1;
  return 2;
};

export const plurRus: (a: number, ...b: Array<string>) => string = (
  num,
  ...forms
) => {
  var str = "";
  switch (forms.length) {
    case 1:
      throw new Error("getPluralRus: введены не все аргументы");

    case 2:
      str = num > 1 ? forms[1] : forms[0];
      break;

    default:
      str = forms[getNounPluralForm(num)];
  }

  return str.replace(/%d/g, String(num));
};
