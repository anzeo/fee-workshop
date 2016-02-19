import {Component} from 'angular2/core';
import {TodoListItem} from './todo-list-item';

@Component({
    selector: 'todo-list-item',
    inputs: ['item'],
    templateUrl: './app/todo-list-item.html',
    styleUrls: ['./app/todo-list-item.css']
})
export class TodoListItemComponent {
    public item: TodoListItem;
}