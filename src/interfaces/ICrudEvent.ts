
import { Event } from "../model/bean/Event"
export interface ICrudEvent {
    create(event: Event): Promise<Event>;
    read(): Promise<Event[]>;
    readEvent(id: string): Promise<Event | null>;
    update(event: Event): Promise<Event>;
    delete(id: string): Promise<Event>;

}