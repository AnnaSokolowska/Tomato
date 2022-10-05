import { Task } from './task';

export class Tomato {
#making = [];
#ready = [];
     constructor(obj) {
    if (obj.timeTask === undefined) {
        this.timeTask = 25;
     } else this.timeTask = obj.timeTask;
    if (obj.pauseTime === undefined) {
        this.pauseTime = 5;
    } else this.pauseTime = obj.pauseTime;
    if (obj.bigPauseTime === undefined) {
        this.bigPauseTime = 15;
    } else this.bigPauseTime = obj.bigPauseTime;
    this.activeTask = null;
    if (obj.tasks === undefined) {
        this.queueTask = [];
    } else  this.queueTask = [obj.tasks];
     }
     get making() {
        return this.#making;
     } 
     get ready() {
        return this.#ready;
     }
     addNewTask(taskName, count) {
     const task = new Task(taskName, count);
    this.queueTask.push(task);
    }
    makeTaskActive(ID) {
    const array = this.queueTask;
    array.forEach(element => {
        if (element.ID === ID) {
            this.activeTask = element;
            console.log(element);
        }
    });
    }
    changeCount(ID) {
        const array = this.queueTask;
        array.forEach(element => {
            if (element.ID === ID) {
               element.countChange();
            }
        });
    }
    
    checkActiveTask() {
        if (this.activeTask != null) {
            let workingTime = this.timeTask;
            const timerId = setInterval(() => {
                workingTime -= 1;
                console.log(workingTime);
                if (workingTime <= 0) {
                    console.log('Времы выполнения задачи истекло');
                        if (workingTime === 0 && this.activeTask.count % 3 === 0) {
                            let pause = this.bigPauseTime;
                         const timerRest = setInterval(() => {
                            if (pause >= 0) {
                                pause -= 1;
                                console.log(pause);
                             }
                             if (pause <= 0) {
                                clearInterval(timerRest);
                                console.log('Время отдыха окончено');
                             }
                         }, 1000);
                        
                        } else if (workingTime === 0) {
                            let pause = this.pauseTime;
                            const timerRest = setInterval(() => {
                                if (pause >= 0) {
                                    pause -= 1;
                                    console.log(pause);
                                 }
                                 if (pause <= 0) {
                                    clearInterval(timerRest);
                                    console.log('Время отдыха окончено');
                                 }
                             }, 1000);
                        }
                       // this.activeTask = null;
    clearInterval(timerId);
                }
            }, 1000);
        } else alert('Активных задач нет');
        this.changeCount(this.activeTask.ID);
        console.log(this.activeTask);
    }

    init() {
this.checkActiveTask();
    }


}