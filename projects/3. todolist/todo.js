let input = prompt("무엇을 하고싶나요?");
const todos = ['Collect Chicken EGG', 'Clean Litter Box'];

while (input !== 'q' && input !=='quit') {
  if(input === 'list') {
    console.log('*********************************');
    for(i=0; i<todos.length; i++) {
      console.log(`${i} : ${todos[i]}`)
    }
    console.log('*********************************');
  } else if (input === 'new') {
      const newTodo = prompt('오늘의 새로운 할 일을 무엇인가요?');
      todos.push(newTodo);
      console.log(`${newTodo}가 추가되었습니다.`);
  } else if(input === 'delete') {
    //문자열을 입력하면 자동으로 0이라는 숫자로 인식하여 할 일 목록 중 0번째 목록이 사라지기 때문데 pareseInt로 정수화를 해줌.
    const indexStr = parseInt(prompt('무엇을 삭제하시겠습니까?'));
    //인덱스에 숫자가 들어가면
    if(!Number.isNaN(index)) { 
      const deleted = todos.splice(index, 1);
          console.log(`${deleted} 삭제되었습니다.`);
    } else {
      console.log('Unknown Index');
    }
  }
  input=prompt("무엇을 하고 싶나요?");
}
console.log("종료하겠습니다.");