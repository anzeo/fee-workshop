import {Component} from 'angular2/core';
import {TodoListComponent} from './todo-list-component';

@Component({
    selector: 'my-todo-app',
    template: `
        <h1>My ToDo Angular 2 App</h1>
        <todo-list [items]="items"></todo-list>
    `,
    directives: [TodoListComponent]
})
export class TodoApp {
    public items = [
        {title: 'Finish Polymer Demo', completed: false},
        {title: 'Climb the Kilimanjaro', completed: false},
        {title: 'Make a TODO-list', completed: true}
    ];
}