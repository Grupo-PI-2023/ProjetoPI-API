import { uuid } from "uuidv4";

export class Event {

    public readonly id: string;
    public name: string;
    public email: string;

    // constructor(props: Event) {
    constructor(props: Omit<Event, 'id'>, id?: string) {
        this.email = props.email;
        this.name = props.name;
        // this.id = props.id

        if (id) {
            this.id = id
        } else {
            this.id = uuid();
        }
    }

}