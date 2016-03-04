import * as ItemService from '../services/item-service';
import {createHyperMediaBuilder} from '../services/hyper-media-builder';

export function getAllItems(request, response) {
    var items = ItemService.getAllItems();
    var itemResources = [];

    items.forEach((item) => {
        itemResources.push(createHyperMediaBuilder()
            .of(item)
            .addSelfLink('/item'));
    });

    response.send(createHyperMediaBuilder().of({}).addEmbeddedResource('items', items));
}

export function createItem(request, response) {
    response.send(ItemService.createItem(request.body.title));
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
