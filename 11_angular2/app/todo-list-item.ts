import {Component} from 'angular2/core';

@Component({
    selector: 'todo-list-item',
    inputs: ['title', 'completed'],
    templateUrl: './app/todo-list-item.html',
    styleUrls: ['./app/todo-list-item.css']
})
export class TodoListItem {
    public title:string;
    public completed:boolean;
}