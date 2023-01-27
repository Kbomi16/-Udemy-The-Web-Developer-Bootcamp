// const newBtn = document.createElement('button');

const container = document.querySelector('#container');

for(let i=0; i<=100; i++) {
  //appendChild를 쓰려면 요소를 만들어야 함.
  const newBtn = document.createElement('button');
  newBtn.innerHTML = "Hey!";
  container.appendChild(newBtn);
}
