// const username = document.querySelector('#username');
// const h1 = document.querySelector('h1');

// username.addEventListener('input', function(e) {
//   const username
//   h1.innerText = username.value;
//   if(username == null) {

//   }
// })
const usernameInput = document.querySelector('#username');
const h1 = document.querySelector('h1');

usernameInput.addEventListener('input', function() {
    const username = usernameInput.value;
    h1.innerText = `Welcome, ${username}`;
    if(username.length === 0) {
        h1.innerText = 'Enter Your Username';
    }
})