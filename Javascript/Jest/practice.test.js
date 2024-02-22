function capitalize(string) {
  const newString = Array.from(string);
  newString[0] = newString[0].toUpperCase();

  return newString.join("");
}

function reverseString(string) {
  return Array.from(string).reverse().join("");

  // const newString = Array.from(string);
  // const reverseString = new Array();
  // for (let i = 0; i <= newString.length; i++) {
  //   reverseString.push(newString[newString.length - i]);
  // }
  // return reverseString.join("");
}

class calculator {
  constructor() {}
  add(num1, num2) {
    return num1 + num2;
  }
  subtract(num1, num2) {
    return num1 - num2;
  }
  multiply(num1, num2) {
    return num1 * num2;
  }
  divide(num1, num2) {
    return num1 / num2;
  }
}

function caesarCipher(string, shift) {
  const newString = Array.from(string).toUpperCase();

  function shifted(shift) {
    
  }
}

test("Capitalize function should capitalize the first letter of the input string", () => {
  const inputString = "example";
  const result = capitalize(inputString);
  expect(result).toBe("Example");
});

test("Reverse function shuold reverse the total letters in the given string", () => {
  const inputString = "hello";
  const result = reverseString(inputString);
  expect(result).toBe("olleh");
});

test("Calculator works well", () => {
  const hello = new calculator();
  expect(hello.add(1, 3)).toEqual(4);
  expect(hello.multiply(2, 4)).toEqual(8);
  expect(hello.subtract(6, 2)).toEqual(4);
  expect(hello.divide(8, 2)).toEqual(4);
});
