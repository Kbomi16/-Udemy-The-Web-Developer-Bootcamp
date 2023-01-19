function allEvens (nums) {
  return nums.every(num => {
    return num%2 === 0;
  });
}