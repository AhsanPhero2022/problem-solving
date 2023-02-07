function isLGSeven(LGSevenNum) {
  if (typeof LGSevenNum !== "number") {
    return "Please, provide a valid number!";
  }
  if (LGSevenNum < 7) {
    return LGSevenNum - 7;
  } else if (LGSevenNum > 7) {
    return LGSevenNum * 2;
  }
}
const jhgf = isLGSeven(-15);
console.log(jhgf);
