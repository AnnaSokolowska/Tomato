import {Task} from './js/task';
import { Tomato } from './js/timer';
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

const tsak01 = new Task( 'помыть машину', 3);
const obj = {
timeTask: 5,
pauseTime: 15,
bigPauseTime: 10,
tasks: tsak01,
};
console.log(tsak01.ID);
const IDtask = tsak01.ID;
const timer = new Tomato(obj);
console.log(timer);
timer.addNewTask('купить квартиру', 2);
timer.addNewTask('испечь торт', 1);
timer.makeTaskActive(`${IDtask}`);

console.log(timer);
timer.init();
