const multiply = (x, y) => x * y;

const square = x => multiply(x, x);

const isRightTriangle = (a, b, c) => (
    square(a) + square(b) === square(c)
)
// a가 3이면 multiplu(3,3)이므로 9가 됨.
// b가 4 -> 16
// c가 5 -> 25
// 9 + 16 === 25 이므로 결과는 true가 됨.
console.log("BEFORE")
isRightTriangle(3, 4, 5)

console.log("DONEEEE!")