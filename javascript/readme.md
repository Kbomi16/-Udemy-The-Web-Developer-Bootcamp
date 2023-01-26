❓const를 쓰는 이유<br>
변하지 않는 것의 확실한 값을 유지하기 위해 사용
<hr>
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
<hr>
### #함수
✔️ForEach : 배열에서 요소당 한 번 함수를 호출함.
```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.forEach(function (el) {
    if (el % 2 === 0) {
        console.log(el)
    }
})
```
✔️Map : 배열의 모든 요소에 대해 콜백을 호출한 결과로 새 배열을 만듦.
```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const doubles = numbers.map(function (num) {
    return num * 2;
})
```
✔️화살표 함수
```js
const add = (a, b) => a + b;


const square = num => {
    return num * num;
}
```
✔️Filter : 주어진 조건을 만족하는 모든 요소가 포함된 새 배열을 만듦.
```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.filter(n => {
    return n < 10
})
```
✔️Every : 배열의 모든 요소가 조건에 맞는지 테스트함(모두 참일시 참 반환)<br>
✔️Some : 배열 중 요소가 하나라도 참이면 참
```js
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

exams.every(score => score >= 75)

const movies = [
    {
        title: 'Amadeus',
        score: 99,
        year: 1984
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    },
    {
        title: 'Stand By Me',
        score: 85,
        year: 1986
    },
    {
        title: 'Waterworld',
        score: 62,
        year: 1995
    },
    {
        title: 'Jingle All The Way',
        score: 71,
        year: 1996
    },
    {
        title: 'Parasite',
        score: 95,
        year: 2010
    },
    {
        title: 'Notting Hill',
        score: 77,
        year: 1999
    },
    {
        title: 'Alien',
        score: 90,
        year: 1979
    }
]


movies.some(movie => movie.year > 2015)
```
✔️Reduce : 감속기<br>
![image](https://user-images.githubusercontent.com/88658551/212842454-cf5fdf4e-f8ce-48a3-ad8d-9293eb272723.png)
```js
//배열 중에서 최소값 찾기
const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

const minPrice = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    }
    return min;
})
```
<hr>
### #DOM
✔️setAttribute<br>
(key, value) 를 통해 html 태그에 해당 key로 셋팅해서 value값을 넣어준다.

✔️getAttribute(key)<br>
key에 해당하는 값을 가져온다.

## ❗append VS appendChild 차이
appendChild는 DOM 함수 / append는 JavaScript 함수<br>

append() 함수를 더 선호한다. append를 할 때 ❗문자열❗을 삽입할 수 있다.<br>
appendChild 함수에는 parameter(매개변수)와 같은 ❗element(요소)❗가 필요하다.<br>
```js
const container = document.querySelector('#container');

for(i=0; i<100; i++) {
  const newBtn = document.createElement('button');
  //appendChild를 쓰려면 요소가 필요하다.
  newBtn.innerHTML = "Hey!";
  container.appendChild(newBtn);
}
```
