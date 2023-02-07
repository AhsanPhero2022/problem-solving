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
const str = evenOdd("5");
console.log(str);
