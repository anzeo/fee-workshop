import * as ItemService from '../services/item-service';
import {createHyperMediaBuilder} from '../services/hyper-media-builder';

export function getAllItems(request, response) {
    let items = ItemService.getAllItems();
    let itemResources = [];

    items.forEach((item) => {
        itemResources.push(createHyperMediaBuilder()
            .of(item)
            .addSelfLink('http://localhost:1337/item/' + item.id));
    });

    response.send(createHyperMediaBuilder().of({}).addEmbeddedResource('items', items));
}

export function getItem(request, response) {
    let id = parseInt(request.params.id);
    let item = ItemService.getItem(id);

    let itemResource = createHyperMediaBuilder()
        .of(item)
        .addSelfLink('http://localhost:1337/item/' + item.id);

    response.send(itemResource);
}

export function createItem(request, response) {
    let newItem = ItemService.createItem(request.body.title);
    response.send(createHyperMediaBuilder().of(newItem).addSelfLink('http://localhost:1337/item/' + newItem.id));
}

export function updateItem(request, response) {
    let id = parseInt(request.params.id);
    try {
        ItemService.updateItem(id, request.body.completed);
        response.status(204).end();
    } catch (error) {
        response.status(404).end();
    }
}
