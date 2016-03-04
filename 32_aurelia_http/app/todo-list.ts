import {inject} from 'aurelia-framework';
import {TodoListItemsService} from "./todo-list-items-service";

@inject(TodoListItemsService)
export class TodoList {

    public items:Array<any>;

    public newItemName:string;

    constructor(private itemsService:TodoListItemsService) {
        itemsService.getItems().then((response) => {
            this.items = response._embedded.items;
        });
    }

    submit() {
        this.itemsService.createItem(this.newItemName).then((response) => {
            this.items.push(response);
            this.newItemName = undefined;
        });
    }
}