import './index.scss';

console.log('Hello! World');

const root = document.getElementById('root')!;

const heading = document.createElement('h1');
heading.innerHTML = 'Simple To Do';

root.appendChild(heading);
