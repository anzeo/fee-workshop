import {Component} from 'angular2/core';
import {TodoListComponent} from './todo-list-component';
import {TodoListItem} from "./todo-list-item";

@Component({
    selector: 'todo-app',
    templateUrl: './app/app.html',
    directives: [TodoListComponent]
})
export class TodoApp {
    public items = [
        new TodoListItem('Finish Angular2 Demo'),
        new TodoListItem('Climb the Kilimanjaro'),
        new TodoListItem('Make a TODO-list', true)
    ];
}