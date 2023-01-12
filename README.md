# -Udemy-The-Web-Developer-Bootcamp



❓const를 쓰는 이유<br>
변하지 않는 것의 확실한 값을 유지하기 위해 사용

### #배열
✔️ 배열 끝에 항목 추가하기
```js
let newLength = fruits.push('오렌지')
// ["사과", "바나나", "오렌지"]

```
✔️ 배열 끝에서부터 항목 제거하기
```js
let last = fruits.pop() // 끝에있던 '오렌지'를 제거
// ["사과", "바나나"]

```
✔️ 배열 앞에서부터 항목 제거하기
```js
let first = fruits.shift() // 제일 앞의 '사과'를 제거
// ["바나나"]

```
✔️ 배열 앞에 항목 추가하기
```js
let newLength = fruits.unshift('딸기') // 앞에 추가
// ["딸기", "바나나"]

```
✔️ 인덱스 위치에 있는 항목 제거하기
```js
let removedItem = fruits.splice(pos, 1) // 항목을 제거하는 방법
// ["딸기", "바나나", "망고"] 에서
// ["딸기", "망고"] 로 바뀜

```
✔️ 인덱스 위치에서부터 여러개의 항목 제거하기
```js
let vegetables = ['양배추', '순무', '무', '당근']
console.log(vegetables)
// ["양배추", "순무", "무", "당근"]

let pos = 1
let n = 2

let removedItems = vegetables.splice(pos, n)
// 배열에서 항목을 제거하는 방법
// pos 인덱스부터 n개의 항목을 제거함

console.log(vegetables)
// ["양배추", "당근"] (원 배열 vegetables의 값이 변함)

console.log(removedItems)
// ["순무", "무"]

```
