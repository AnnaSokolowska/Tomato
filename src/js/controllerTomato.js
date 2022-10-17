
export class ControllerTomato {
    constructor(app, tomato) {
        this.app = app;
        this.tomato = tomato;
        this.init();
    }

    init () {
   this.addTask();
   this.addActiveTask();
   this.addImportnace();
    }
    addTask() {
        const form = document.querySelector('.task-form');
        console.log(form);
        form.addEventListener('submit', e => {
            e.preventDefault();
            const input = document.getElementById('task-name');
            const taskName = input.value;
            console.log(input.value);
            if (input.value !== '') {
                const imp = document.querySelector('.button-importance');
                let  importance = imp.getAttribute('aria-label');
                console.log(importance);
                if  (importance === "Указать важность") {
                    importance = 'default';
                }
                let count = 1;
                this.tomato.addNewTask(taskName, count, importance);
                form.reset();
            } else  alert('Невозможно создать пустую задачу');
            
        })

    } 
    addActiveTask() {
        const list = document.querySelector('.pomodoro-tasks__quest-tasks');
        console.log(this.tomato);
        list.addEventListener('click', e => {
            const target = e.target;
           if (target.closest('.pomodoro-tasks__task-text')) {
            const button = target.closest('.pomodoro-tasks__task-text');
           // button.classList.add('pomodoro-tasks__task-text-active');
            const taskID = target.closest('.pomodoro-tasks__list-task').getAttribute('id');
            console.log(button);
            this.tomato.makeTaskActive(`${taskID}`);
            console.log(this.tomato);
           }
           if (target.closest('.pomodoro-tasks__task-button')) {
            const popup = target.closest('.burger-popup');
            console.log(popup);
            //popup.classList.add('burger-popup_active');
        }
           
        });
    }
    addImportnace () {
        let count = 0;
const imp = ['default', 'important', 'so-so']
document.querySelector('.button-importance').addEventListener('click', ({target}) => {
  count += 1;
  if (count >= imp.length) {
    count = 0
  }

  for (let i = 0; i < imp.length; i++) {
    if (count === i) {
      target.classList.add(imp[i]);
      target.setAttribute('aria-label', `${imp[i]}`);
    } else {
      target.classList.remove(imp[i]);
    }
  }
})

    }
    
} 