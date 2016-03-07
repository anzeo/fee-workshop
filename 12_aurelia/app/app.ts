export class App {

    public message:string;
    public items: Array<any>;

    constructor() {
        this.message = 'Hello world!';
        this.items = [
            {title: 'Finish Polymer Demo', completed: false},
            {title: 'Climb the Kilimanjaro', completed: false},
            {title: 'Make a TODO-list', completed: true}
        ];
    }

}