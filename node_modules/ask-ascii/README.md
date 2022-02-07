# ask-ascii

ASCII Conversions.

- Characters to Integers (`convertToAscii`)
- Integers to Characters (`convertIntegerToChar`)

## Installation using npm and setting up

`npm i ask-ascii`

**Setting Up**

```js
const { convertToAscii, convertIntegerToChar } = require("ask-ascii");
```

## Usage

|      Function Name 🤖      | Parameters ⚗           | Return type 🎁                                                         |
| :------------------------: | ---------------------- | ---------------------------------------------------------------------- |
|    convertToAscii 🔡➡🔢    | A String               | An array of all the ASCII codes corresponding to the character indices |
| convertIntegerToChar 🔢➡🔡 | Any Number Of Integers | Returns the corresponding ASCII character in the order to arguments    |

**Code Snippets**

```js
const { convertToAscii, convertIntegerToChar } = require("ask-ascii");

console.log(convertToAscii("HI"));
//[ 72, 73]

let checkAscii = convertToAscii("HI!");
console.log(...checkAscii); // 72 73

console.log(convertIntegerToChar(72, 73));
// HI

let checkCharCode = convertIntegerToChar(72, 73);
console.log(...checkCharCode); // HI
```
