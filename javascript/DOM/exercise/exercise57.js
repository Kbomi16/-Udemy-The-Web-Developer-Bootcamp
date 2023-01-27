// const li = document.querySelector('li');
// const highlight = document.getElementsByClassName('highlight');

// li.classList.toggle('#B10DC9');
// highlight.classList.toggle('#7FDBFF');

const list = document.querySelectorAll('li');

for(let li of list) {
  li.classList.toggle('highlight');
}