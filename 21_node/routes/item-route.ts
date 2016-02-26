import * as ItemService from '../services/item-service';

export function getAllItems(request, response){
    response.send(ItemService.getAllItems());
}

export function createItem(request, response){
    response.send(ItemService.createItem(request.body.title));
}

export function updateItem(request, response){
    var id = parseInt(request.params.id);
    try {
        ItemService.updateItem(id, request.body.completed);
        response.status(201).end();
    } catch(error){
        response.status(404).end();
    }
}
