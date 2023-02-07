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

let arr = [1, 2, 3];
let call = findingBadData(arr);
console.log(call);
