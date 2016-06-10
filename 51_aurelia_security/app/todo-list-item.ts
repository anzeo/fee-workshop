import {bindable, inject} from 'aurelia-framework';
import {TodoListItemsService} from "./todo-list-items-service";

@inject(TodoListItemsService)
export class TodoListItem {
    @bindable
    public item: any;

    constructor(private itemsService: TodoListItemsService) {}

    onClick(){
        this.itemsService.updateItem(this.item);
    }
}