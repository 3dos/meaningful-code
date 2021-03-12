// conert a string of numbers to array
const convertStringToNumbers = (input: string) => {
  let numbers: number[] = [];
  let number = '';

  for (const letter of input) {
    if (letter === '\n') {
      const intNumber = parseInt(number)
      if (numbers.length === 0 || intNumber >= numbers[numbers.length - 1]) {
        numbers.push(intNumber);
      } else if (intNumber < numbers[0]) {
        numbers.unshift(intNumber);
      }
      number = '';
    } else {
      number += letter;
    }
  }

  return numbers;
}