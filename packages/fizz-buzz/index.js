const fizzBuzz = (num = 1) => {
  const content = !(num % 15)
    ? "FizzBuzz"
    : !(num % 3)
    ? "Fizz"
    : !(num % 5)
    ? "Buzz"
    : num.toString();

  console.log(content);
};

const printFizzBuzz = (nums = []) => nums.forEach(fizzBuzz);

const nums = Array(100)
  .fill(0)
  .map((_, i) => i + 1);

printFizzBuzz(nums);
