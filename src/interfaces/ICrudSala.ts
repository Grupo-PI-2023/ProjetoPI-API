
import { Sala } from "../model/bean/Sala"
export interface ICrudSala {
    create(sala: Sala): Promise<Sala>;
    read(): Promise<Sala[]>;
    readSala(id: string): Promise<Sala | null>;
    update(sala: Sala): Promise<Sala>;
    delete(id: string): Promise<Sala>;

}