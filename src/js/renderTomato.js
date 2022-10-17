import { Task } from "./task";


export class RenderTomato {
    constructor(app, tomato) {
     this.app = app;
     this.tomato = tomato;
     this.init();
    }
    init() {
        this.wrapper = document.querySelector('.main__container');
        this.wrapDiv = document.createElement('div');
        this.wrapDiv.classList.add('pomodoro-tasks');
        
        this.divForm = document.querySelector('.pomodoro-form');
        this.createTomato(); 
    }

    
    createTomato() {
        this.wrapper.textContent = '';
       this.divForm.textContent = '';
      const queueList = this.createList();
      const formTask = this.createForm();
      this.wrapDiv.append(queueList);
      this.divForm.append(formTask);
      this.wrapper.append(this.divForm, this.wrapDiv);
    }
    createList() {
        const list = document.createElement('ul');
        list.classList.add('pomodoro-tasks__quest-tasks');
        this.tomato.queueTask.forEach(task => {
            const item = document.createElement('li');
            item.classList.add('pomodoro-tasks__list-task');
            item.classList.add(`${task.importance}`);
            item.setAttribute('id', `${task.ID}`);
            const span = document.createElement('span');
            span.classList.add('count-number');
            span.textContent = `${task.count}`;
            const button = document.createElement('button');
            button.classList.add('pomodoro-tasks__task-text');
            if (task === this.tomato.activeTask) {
                button.classList.add('pomodoro-tasks__task-text_active');
            } else button.classList.remove('pomodoro-tasks__task-text_active');
            button.textContent = `${task.getTaskName()}`;

            const btnClose = document.createElement('button');
            btnClose.classList.add('pomodoro-tasks__task-button');

            const popUp = document.createElement('div');
            popUp.classList.add('burger-popup');
            const btnEdit = document.createElement('button');
            btnEdit.classList.add('popup-button', 'burger-popup__edit-button');
            btnEdit.textContent = 'Редактировать';
            const btnPopDel = document.createElement('button');
            btnPopDel.classList.add('burger-popup__delete-button', 'popup-button');
            btnPopDel.textContent = 'Удалить';
            popUp.append(btnEdit, btnPopDel);

            item.append(span, button, btnClose, popUp);
            list.append(item);
        });
        return list;
        console.log(list);
    }
    createForm() {
        const form = document.createElement('form');
        form.classList.add('task-form');
        //form.setAttribute('action', 'submit');

        const input = document.createElement('input');
        input.classList.add('task-name', 'input-primary');
        input.setAttribute('type', 'text');
        input.setAttribute('name', 'task-name');
        input.setAttribute('id', 'task-name');
        input.setAttribute('placeholder', 'название задачи');

        const btnImpotance = document.createElement('button');
        btnImpotance.classList.add('button', 'button-importance', 'default');
        btnImpotance.setAttribute('type', 'button');
        btnImpotance.setAttribute('aria-label', 'Указать важность');

        const btnAdd = document.createElement('button');
        btnAdd.classList.add('button', 'button-primary', 'task-form__add-button');
        btnAdd.setAttribute('type', 'submit');
        btnAdd.textContent = 'Добавить';


        form.append(input, btnImpotance, btnAdd);
        return form;

    }
}