import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {TodoListItemComponent} from './todo-list-item-component';
import {TodoListItem} from './todo-list-item';
import {TodoListItemsService} from './todo-list-items-service';


@Component({
    selector: 'todo-list',
    templateUrl: './app/todo-list.html',
    directives: [TodoListItemComponent],
    providers: [HTTP_PROVIDERS, TodoListItemsService]
})
export class TodoListComponent implements OnInit{
    public items;
    public newItemName;

    constructor(private itemsService : TodoListItemsService) {};

    ngOnInit(){
        this.itemsService.getItems().subscribe(
            (items) => {
                this.items = items._embedded.items;
            }, (error) => {
                console.error(error);
            }
        );
    }

    onSubmit() {
        this.itemsService.createItem(this.newItemName).subscribe((newItem) => {
            this.items.push(newItem);
            this.newItemName = undefined;
        });
    }

}