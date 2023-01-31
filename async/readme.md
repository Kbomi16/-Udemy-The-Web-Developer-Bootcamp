# #콜스택 CALL STACK
>작동과정
>>- 스크립트가 함수를 호출하면 인터프리터는 함수를 호출 스택에 추가한 다음 함수를 수행함.
>>- 해당 함수에 의해 호출되는 모든 함수는 호출 스택에 추가되고 호출이 도달한 곳에서 실행됨.
>>- 현재 기능이 완료되면 인터프리터는 스택에서 해당 기능을 제거하고 마지막 코드 목록에서 종료한 위치에서 실행을 다시 시작함.

http://latentflip.com/loupe/?code=ZnVuY3Rpb24gbXVsdGlwbHkoeCx5KSB7CiAgICByZXR1cm4geCAqIHk7Cn0KCmZ1bmN0aW9uIHNxdWFyZSh4KSB7CiAgICByZXR1cm4gbXVsdGlwbHkoeCx4KTsKfQoKZnVuY3Rpb24gaXNSaWdodFRyaWFuZ2xlKGEsYixjKXsKICAgIHJldHVybiBzcXVhcmUoYSkgKyBzcXVhcmUoYikgPT09IHNxdWFyZShjKTsKfQoKaXNSaWdodFRyaWFuZ2xlKDMsNCw1KQ%3D%3D

```js
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
```

# #콜백 CALL BACK
>동작 과정
>>- 브라우저에는 백그라운드에서 특정 작업(예: 요청 수행 또는 setTimeout)을 처리할 수 있는 웹 API가 제공됨.
>>- JS 호출 스택은 이러한 웹 API 기능을 인식하고 이를 처리하기 위해 브라우저로 전달함.
>>- 브라우저가 이러한 작업을 완료하면 다시 돌아와 콜백으로 스택에 푸시됨.

http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coIlNlbmRpbmcgcmVxdWVzdCB0byBzZXJ2ZXIhIikKc2V0VGltZW91dChmdW5jdGlvbigpIHsKICAgIGNvbnNvbGUubG9nKCJIZXJlIGlzIHlvdXIgZGF0YSBmcm9tIHRoZSBzZXJ2ZXIuLi4iKQp9LCAzMDAwKQpjb25zb2xlLmxvZygiSSBBTSBBVCBUSEUgRU5EIE9GIFRIRSBGSUxFISIp

```js
console.log("Sending request to server!")  //1
setTimeout(() => {
    console.log("Here is your data from the server...") //3
}, 3000)
console.log("I AM AT THE END OF THE FILE!") //2
```
```js
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

//doNext는 함수임.
const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

//doNext는 함수라서 ()를 씀.
delayedColorChange('red', 1000, () => {
    delayedColorChange('orange', 1000, () => {
        delayedColorChange('yellow', 1000, () => {
            delayedColorChange('green', 1000, () => {
                delayedColorChange('blue', 1000, () => {

                })
            })
        })
    })
});
```
