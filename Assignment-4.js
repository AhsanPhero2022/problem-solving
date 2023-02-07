function mindGame(gamNumber) {
  if (typeof gamNumber !== "number") {
    return "Provide a valid string";
  }

  const firstOperation = gamNumber * 3;
  const secodAdded = firstOperation + 10;
  const share = secodAdded / 2;
  const less = share - 5;
  return less;
}

// article

function evenOdd(evenStringLength) {
  if (typeof evenStringLength !== "string") {
    return "Please, provide a string!";
  }
  const chracterCount = evenStringLength.length;
  const checkOdd = chracterCount % 2;
  if (checkOdd === 0) {
    return "even";
  } else {
    return "odd";
  }
}

// descripton

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

// description

function findingBadData(findingData) {
  if (typeof findingData !== "object") {
    return "Use only array";
  }
  let badData = 0;
  for (let i = 0; i < findingData.length; i++) {
    if (badData[i] < 0) {
      badData++;
    }
  }
  return badData;
}

// description

function gemsToDiamond(firstFriend, secodFriend, thirdFriend) {
  if (typeof firstFriend !== "number") {
    return "Please, provide a valid number!";
  } else if (typeof secodFriend !== "number") {
    return "Please, provide a valid number!";
  } else if (typeof thirdFriend !== "number") {
    return "Please, provide a valid number!";
  }
  const stFriendDaymond = firstFriend * 21;
  const mdFriendDaynond = secodFriend * 32;
  const endFirndDaymond = thirdFriend * 43;
  const totalDaymond = stFriendDaymond + mdFriendDaynond + endFirndDaymond;

  return totalDaymond - 2000;
}
