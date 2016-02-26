export class TodoListItem {
    id: number;
    title: string;
    completed: boolean;

    constructor(id: number, title: string){
        this.id = id;
        this.title = title;
        this.completed = false;
    }
}