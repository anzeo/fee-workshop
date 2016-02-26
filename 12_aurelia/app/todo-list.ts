import {bindable} from 'aurelia-framework';

export class TodoList {

    @bindable
    public items: Array<any>;
}