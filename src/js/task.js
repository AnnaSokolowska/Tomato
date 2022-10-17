 export class Task {
  #ID;
  constructor (taskName, count = 0) {
    this.#ID = (Math.floor(Math.random()*1000000)).toString();
    this.taskName = taskName;
    this.count = Number(count);
    }

    countChange() {
        this.count = Number(this.count) + 1;
        return this;
    }

    taskNameChange(newTask) {
        this.taskName = newTask;
        return this;
    }
    get ID() {
        return this.#ID;
    }
    set ID(data) {
        console.log(`Нельзя изменить ID`);
    }
    getTaskName() {
        return this.taskName;
    }
    
}

export class NessesaryTask extends Task {
    importance = 'important';
    constructor(taskName, count, ID) {
        super(taskName, count, ID);
    }
}
export class StandartTask extends Task {
    importance = 'default';
    constructor(taskName, count, ID) {
        super(taskName, count, ID);
    }
}
export class UnnessesaryTask extends Task {
    importance = 'so-so';
    constructor(taskName, count, ID) {
        super(taskName, count, ID);
    }
}

/*class MakeTaskCommand {
    constructor(task, importance) {
        this.task = task;
        this.importance = importance;
    }
    excute() {
        throw new Error('Not implemented');
    }
}

class Add extends MakeTaskCommand {
    execute() {
        this.task = task;
        this.importance = this.importance;
        return true
    }
}

class AddTask {
    constructor() {
        this.commands = [];
    }
    operation(task, importance) {
        const Command = (importance === 'nessesary') ? new NessesaryTask() : 
        (importance === 'standart') ? new StandartTask() : new UnnessesaryTask;
        const command = new Command(task, importance);
        if (command.execute()) {
            this.commands.push(command);
        }
    }
}*/


