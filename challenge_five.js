var base_number;
var base_number_recover;
var correct;
var decimal_number;

function to_decimal(base, base_number) {
  // console.log(base);
  // console.log(base_number);

  let decimal = 0;
  let count = 0;
  for (let i = base_number.length - 1; i >= 0; i--) {
    const operation = (base ** count) * (base_number[i]);
    count++;
    decimal += operation;
  }
  console.log('decimal ', decimal);
  return decimal;
}
var base_number = [1, 0, 1, 1];

to_decimal(2, base_number);

function from_decimal(base, decimal_number) {
// iterate through the number till it becomes 0.
var binary = '';
  while (decimal_number > 0) {
    // if modulo of number with 2 is ‘1’, append 1 in front of binary string. Otherwise append 0.
    if (decimal_number % base == 1) {
      binary += "1";
    } else {
      binary += "0";
    }
    // divide number by 2.
    decimal_number = Math.floor(decimal_number / 2);
  }
  let reverseArr = binary.split('');
  console.log('reverseArr ', reverseArr);

  reverseArr = reverseArr.reverse();
  reverseArr = reverseArr.join('');
  console.log('reverseArr ', reverseArr);
  return reverseArr;
}
var base_number = 11;

from_decimal(2, base_number);

// if __name__ == '__main__':
// base: int = 7
// base_number: Sequence[int] = [5, 1, 6, 0, 3, 6, 2]
// print(f"Given number in base {base:d} is {base_number}")
// decimal_number: int = to_decimal(base, base_number)
// print(f"Converted decimal number is {decimal_number}")
// base_number_recover: Sequence[int] = from_decimal(base, decimal_number)
// print(f"Recovered number in base {base:d} is {base_number_recover}")
// correct: bool = base_number == base_number_recover
// print(f"Is the code working correctly? {correct}")