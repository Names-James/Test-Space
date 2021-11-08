const container = document.querySelector('#container');
const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const par = document.createElement('p');
const hThree = document.createElement('h3');

par.setAttribute('style', 'color: red;');
par.textContent = "Hey, I'm red!"
container.appendChild(par);

hThree.setAttribute('style', 'color: blue;');
hThree.textContent = "I'm a blue h3";
container.appendChild(hThree);


const div = document.createElement('div');
const parTwo = document.createElement('p');
const hOne = document.createElement('h1');

div.setAttribute('style', 'border: 2px solid black; background-color: pink;');
parTwo.textContent = 'ME TOO!';
hOne.textContent = "I'm in a div";
div.appendChild(hOne);
div.appendChild(parTwo);
container.appendChild(div);

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
});

