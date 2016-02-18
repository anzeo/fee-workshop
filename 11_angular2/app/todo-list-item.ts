import {Component} from 'angular2/core';

@Component({
    selector: 'todo-list-item',
    inputs: ['title', 'completed'],
    templateUrl: './app/todo-list-item.html'
})
export class TodoListItem {
    public title:string;
    public completed:boolean;
}