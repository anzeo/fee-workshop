import {bindable} from 'aurelia-framework';

export class TodoList {

    @bindable
    public items: Array<any>;

    public newItemName:string;

    submit(){
        this.items.push({
            title: this.newItemName,
            completed: false
        });

        this.newItemName = undefined;
    }
}