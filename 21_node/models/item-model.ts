export class TodoListItem {
    completed: boolean;

    constructor(public id: number, public title: string){
        this.completed = false;
    }
}