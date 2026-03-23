let asd = 10001001;
let firstNum = asd;
let lastDigit = 0;
let newNum = 0;
let i = 1;

while (asd >= 10) {
  lastDigit = asd % 10;
  newNum = newNum * 10 + lastDigit;
  asd = (asd - lastDigit) / 10;
}
newNum = newNum * 10 + asd;
console.log(newNum);

if (newNum === firstNum) {
  console.log("Palindrome mun");
} else console.log("Palindrome bish");
