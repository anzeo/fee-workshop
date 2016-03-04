import * as ItemService from '../services/item-service';
import {createHyperMediaBuilder} from '../services/hyper-media-builder';

export function getAllItems(request, response) {
    var items = ItemService.getAllItems();
    var itemResources = [];

    items.forEach((item) => {
        itemResources.push(createHyperMediaBuilder()
            .of(item)
            .addSelfLink('/item/' + item.id));
    });

    response.send(createHyperMediaBuilder().of({}).addEmbeddedResource('items', items));
}

export function createItem(request, response) {
    var newItem = ItemService.createItem(request.body.title);
    response.send(createHyperMediaBuilder().of(newItem).addSelfLink('/item/' + newItem.id));
}

export function updateItem(request, response) {
    var id = parseInt(request.params.id);
    try {
        ItemService.updateItem(id, request.body.completed);
        response.status(201).end();
    } catch (error) {
        response.status(404).end();
    }
}
