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
const num = mindGame("33");
console.log(num);
