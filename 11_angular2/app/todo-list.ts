import {Component} from 'angular2/core';
import {TodoListItem} from './todo-list-item';

@Component({
    selector: 'todo-list',
    inputs: ['items'],
    templateUrl: './app/todo-list.html',
    directives: [TodoListItem]
})
export class TodoList {
    public items;
}