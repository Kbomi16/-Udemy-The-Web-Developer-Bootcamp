// const p1Button = document.querySelector('#p1Button');
// const p2Button = document.querySelector('#p2Button');
// const p1Display = document.querySelector('#p1Display');
// const p2Display = document.querySelector('#p2Display');
// const resetButton = document.querySelector('#reset');
// const winningScoreSelect = document.querySelector('#playto');

// let p1Score = 0;
// let p2Score = 0;
// let winningScore = 3;
// let isGameOver = false;

const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display')
}
const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
  //게임오버가 아니면 점수 1점씩 올리고
  if (!isGameOver) {
      player.score += 1;
      //스코어가 승점까지 도달했을 때 게임오버가 됨.
      if (player.score === winningScore) {
          isGameOver = true;
          player.display.classList.add('has-text-success');
          opponent.display.classList.add('has-text-danger');
          player.button.disabled = true;
          opponent.button.disabled = true;
      }
      player.display.textContent = player.score;
  }
}


p1.button.addEventListener('click', function () {
  updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
  updateScores(p2, p1)
})


winningScoreSelect.addEventListener('change', function () {
  //parseInt : 문자를 숫자로
  winningScore = parseInt(this.value);
  reset();
})

resetButton.addEventListener('click', reset)

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
      p.score = 0;
      p.display.textContent = 0;
      p.display.classList.remove('has-text-success', 'has-text-danger');
      p.button.disabled = false;
  }
}
