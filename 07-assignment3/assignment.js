const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const randomNumber2 = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
  alert("The number is greater than 0.7");
}

let nums = [1, 3, 5, 7, 9];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]); // 1, 3, 5, 7, 9
}

for (let num of nums) {
  console.log(num); // 1, 3, 5, 7, 9
}

for (let i = nums.length - 1; i >= 0; i--) {
  console.log(nums[i]); // 9, 7, 5, 3, 1
}

if (
  (randomNumber > 0.7 && randomNumber2 > 0.7) ||
  randomNumber < 0.2 ||
  randomNumber2 < 0.2
) {
  alert("Both numbers are greater than 0.7 or at least one is less than 0.2");
  console.log(randomNumber, randomNumber2);
}
