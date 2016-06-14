import {TodoListItem} from '../models/item-model';

var nextItemId = 1;
var items: Array<TodoListItem> = [];

export function getAllItems(){
    return items;
}

export function getItem(id: number){
    var item = getItemById(id);
    if(item){
        return item;
    } else {
        throw new Error('No item with id ' + id);
    }
}

export function createItem(title) : TodoListItem {
    var newItem = new TodoListItem(nextItemId++, title);
    items.push(newItem);
    return newItem;
}

export function updateItem(id: number, completed: boolean){
    var item = getItemById(id);
    if(item){
        item.completed = completed;
    } else {
        throw new Error('No item with id ' + id);
    }
}

function getItemById(id: number) : TodoListItem {
    for(var i = 0; i < items.length; i++){
        if(items[i].id === id){
            return items[i];
        }
    }
    return undefined;
}
