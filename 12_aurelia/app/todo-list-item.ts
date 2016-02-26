import {bindable} from 'aurelia-framework';

export class TodoListItem {
    @bindable
    public title:string;
    @bindable
    public completed:boolean;
}