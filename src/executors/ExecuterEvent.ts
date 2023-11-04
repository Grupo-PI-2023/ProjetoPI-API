import { Event } from "../model/bean/Event";
import { ICrudEvent } from "../interfaces/ICrudEvent";

export class ExecuterEvent {

    constructor(
        private daoEvent: ICrudEvent
    ) { }

    async create(user: Event) {
        const eventOut: Event = await this.daoEvent.create(user);
        return eventOut;
    }

    async read(): Promise<Event[]> {
        const eventOut: Event[] = await this.daoEvent.read();
        return eventOut;
    }

    async readEvent(id: string): Promise<Event | null> {
        const eventOut: Event | null = await this.daoEvent.readEvent(id);
        return eventOut;
    }

    async update(user: Event): Promise<Event> {
        const eventOut: Event = await this.daoEvent.update(user);
        return eventOut;
    }

    async delete(id: string): Promise<Event> {
        const eventOut: Event = await this.daoEvent.delete(id);
        return eventOut;
    }

}