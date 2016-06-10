import {inject} from "aurelia-framework";
import {HttpClient, json} from "aurelia-fetch-client";

@inject(HttpClient)
export class TodoListItemsService {

    constructor(private http:HttpClient) {
    }

    getItems() {
        return this.http.fetch('http://localhost:1337/item')
            .then(response => response.json());
    }

    createItem(newItemName:string) {
        return this.http.fetch('http://localhost:1337/item', {
            method: 'POST',
            body: json({
                "title": newItemName
            })
        }).then(response => response.json());
    }

    updateItem(item){
        this.http.fetch(item._links.self, {
            method: 'PUT',
            body: json(item)
        });
    }
}