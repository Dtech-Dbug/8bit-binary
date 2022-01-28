function binaryEncrypt(array, target) {
  // turn all target indices 1

  let binaryArrayToBeMade = [...array];

  //   else put to 0
  for (let i = 0; i < binaryArrayToBeMade.length; i++) {
    // ! put zero if the current index is not in target array
    if (!target.includes(i)) {
      binaryArrayToBeMade[i] = 0;
    }

    // ! One in place of all indices in target array
    for (let j = 0; j < target.length; j++) {
      binaryArrayToBeMade[target[j]] = 1;
    }
  }
  return binaryArrayToBeMade;
}

function findInArray(array, target) {
  let indices = [];
  let copyArray = [...array];

  // if target is in array
  if (array.includes(target)) {
    indices.push(array.indexOf(target));
  } else {
    // if target is not in the first pass
    for (let i = 0; i < array.length; i++) {
      if (array[i] > target) {
        // pop exceeding items
        copyArray.pop(array[i]);
      }
    }
    // new target. example:25 // greatest low : 16 // new target: 25 - 16 for rec.
    let newTarget = target - copyArray[copyArray.length - 1];

    // save track of the greatest item in the new array
    indices.push(array.indexOf(copyArray[copyArray.length - 1]));

    // apply recursion to fill indices
    indices.push(...findInArray(copyArray, newTarget));
  }

  return indices;
}

class BinaryConversion {
  static _8BitsArray = [1, 2, 4, 8, 16, 32, 64, 128, 256];
  itemToBeConverted;

  constructor(userGivenValue) {
    this.itemToBeConverted = userGivenValue;
  }

  showDetails() {
    let details = {
      controlArray: BinaryConversion._8BitsArray,
      userValue: this.itemToBeConverted,
    };
    return details;
  }

  _8BitConversion() {
    return binaryEncrypt(
      BinaryConversion._8BitsArray,
      findInArray(BinaryConversion._8BitsArray, this.itemToBeConverted)
    );
  }
}

console.time("Time:");

let convertSevenToBinary = new BinaryConversion(7);
let convertTenToBinary = new BinaryConversion(10);
console.log(convertSevenToBinary instanceof BinaryConversion);
console.log(convertSevenToBinary._8BitConversion());
console.log(convertTenToBinary._8BitConversion());

console.timeEnd("Time:");
