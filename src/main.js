import {Task} from './js/task';
import './scss/index.scss';

let count = 0;
const imp = ['default', 'important', 'so-so']
document.querySelector('.button-importance').addEventListener('click', ({target}) => {
  count += 1;
  if (count >= imp.length) {
    count = 0
  }

  for (let i = 0; i < imp.length; i++) {
    if (count === i) {
      target.classList.add(imp[i])
    } else {
      target.classList.remove(imp[i])
    }
  }
})

const tsak01 = new Task('помыть машину', 1);
console.log(tsak01);
tsak01.taskName = 'sdfgsjf';
console.log(tsak01);

