
import { Area } from "../model/bean/Area"
export interface ICrudArea {
    create(area: Area): Promise<Area>;
    read(): Promise<Area[]>;
    readArea(id: string): Promise<Area | null>;
    readAreasByEvent(id: string): Promise<Area[]>
    update(area: Area): Promise<Area>;
    delete(id: string): Promise<Area>;

}