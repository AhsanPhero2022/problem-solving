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

const gemCount = gemsToDiamond(100, "5", 1);
console.log(gemCount);
