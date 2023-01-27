
//원래 있던 폼
const tweetForm = document.querySelector('#tweetForm');
//새로 추가될 폼
const tweetsContainer = document.querySelector('#tweets');

//폼에서 submit을 누르면 preventDefault가 실행
//1. a 태그를 눌렀을때도 href 링크로 이동하지 않게 할 경우
//2. form 안에 submit 역할을 하는 버튼을 눌렀어도 새로 실행하지 않게 하고싶을 경우 (submit은 작동됨)
tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];

    //폼요소 중 name이 username, tweet
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;

    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

//새 폼에 저장
const addTweet = (username, tweet) => {
    //newTweet은 li태그에 저장
    const newTweet = document.createElement('li');
    //bTag는 b태그에 저장
    const bTag = document.createElement('b');
    
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}

