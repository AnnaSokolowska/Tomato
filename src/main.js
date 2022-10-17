import {Task, NessesaryTask, StandartTask, UnnessesaryTask} from './js/task';
import { Tomato } from './js/timer';
import './scss/index.scss';



const tsak01 = new UnnessesaryTask( 'помыть машину', 2, 'so-so');
const tsak02 = new NessesaryTask( 'купить квартиру', 1);
console.log(tsak02);
const obj = {
timeTask: 5,
pauseTime: 15,
bigPauseTime: 10,
tasks: tsak01,
};
console.log(tsak01.ID);
const IDtask = tsak01.ID;
const timer = new Tomato(obj, '.pomodoro-tasks');
console.log(timer);
//timer.addNewTask('купить квартиру', 2,'important');
//timer.addNewTask('испечь торт', 1, 'default');
//timer.makeTaskActive(`${IDtask}`);

console.log(timer);
timer.init();

