let maximum = parseInt(prompt("최대 숫자를 입력하세요!"));

while (!maximum) {
  maximum = parseInt(prompt("유효 숫자를 입력하세요!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("숫자를 입력하세요"));
let attempts=1;

while (parseInt(guess) !== targetNum) {
  if(guess === 'q') break;
  attempts++;
  if(guess > targetNum) {
    guess = prompt("넘 높아요! 새 숫자를 입력하세요");
  } else {
    guess = prompt("넘 낮아요! 새 숫자를 입려하세요");
  }
}
if(guess === 'q') {
  console.log("게임 끝")
} else {
  console.log(`정답입니다.!! ${attempts}번의 시도가 있었습니다.`);
}
