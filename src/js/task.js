 export class Task {
  #ID;
  #taskName;
  #count;
  constructor (taskName, count = 0) {
    this.#ID = (Math.floor(Math.random()*1000000)).toString();
    this.#taskName = taskName;
    this.#count = Number(count);
    }
    set count(data) {
        console.log(`Нельзя изменть значение счетчика`);
    }
    get count() {
        return this.#count;
    }
    countChange() {
        this.#count = Number(this.count) + 1;
        return this;
    }
    set taskName(newName) {
        console.log(`Нельзя изменть данную задачу`);
    }
    get taskName() {
        return this.#taskName;
    }
    taskNameChange(newTask) {
        this.#taskName = newTask;
        return this;
    }
    get ID() {
        return this.#ID;
    }
    set ID(data) {
        console.log(`Нельзя изменить ID`);
    }
    
}