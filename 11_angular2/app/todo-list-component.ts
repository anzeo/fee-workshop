import {Component} from 'angular2/core';
import {TodoListItemComponent} from './todo-list-item-component';
import {TodoListItem} from './todo-list-item';


@Component({
    selector: 'todo-list',
    inputs: ['items'],
    templateUrl: './app/todo-list.html',
    directives: [TodoListItemComponent]
})
export class TodoListComponent {
    public items;
    public newItemName;

    onSubmit() {
        this.items.push(new TodoListItem(this.newItemName));
        this.newItemName = undefined;
    }

}