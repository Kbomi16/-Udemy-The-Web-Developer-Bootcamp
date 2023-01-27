//makeRandColor 함수 : rgb색상 설정
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

//버튼 다 선택
const buttons = document.querySelectorAll('button');
for (let button of buttons) {
    //버튼 클릭하면  colorize 함수 실행
    button.addEventListener('click', colorize)
}

//h1 다 선택
const h1s = document.querySelectorAll('h1');
for (let h1 of h1s) {
    //h1 클릭하면 colorize 함수 실행
    h1.addEventListener('click', colorize)
}

//colorize 함수
function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}
