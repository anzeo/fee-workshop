import {Component} from 'angular2/core';
import {TodoListItem} from './todo-list-item';
import {TodoListItemsService} from "./todo-list-items-service";

@Component({
    selector: 'todo-list-item',
    inputs: ['item'],
    templateUrl: './app/todo-list-item.html',
    styleUrls: ['./app/todo-list-item.css']
})
export class TodoListItemComponent {
    public item: TodoListItem;

    constructor(private itemsService : TodoListItemsService) {};

    onClick(){
        this.item.completed = !this.item.completed;
        this.itemsService.updateItem(this.item);
    }
}