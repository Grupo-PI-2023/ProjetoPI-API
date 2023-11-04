import { Area } from "../model/bean/Area";
import { ICrudArea } from "../interfaces/ICrudArea";

export class ExecuterArea {

    constructor(
        private daoArea: ICrudArea
    ) { }

    async create(Area: Area) {
        const areaOut: Area = await this.daoArea.create(Area);
        return areaOut;
    }

    async read(): Promise<Area[]> {
        const areaOut: Area[] = await this.daoArea.read();
        return areaOut;
    }

    async readArea(id: string): Promise<Area | null> {
        const areaOut: Area | null = await this.daoArea.readArea(id);
        return areaOut;
    }

    async update(Area: Area): Promise<Area> {
        const areaOut: Area = await this.daoArea.update(Area);
        return areaOut;
    }

    async delete(id: string): Promise<Area> {
        const areaOut: Area = await this.daoArea.delete(id);
        return areaOut;
    }

}