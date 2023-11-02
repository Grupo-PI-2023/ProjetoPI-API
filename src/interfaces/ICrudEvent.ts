
import { Event } from "../model/bean/Event"
export interface ICrudEvent {
    create(user: Event): Promise<Event>;
    read(): Promise<Event[]>;
    readUser(id: string): Promise<Event | null>;
    update(user: Event): Promise<Event>;
    delete(id: string): Promise<Event>;

}