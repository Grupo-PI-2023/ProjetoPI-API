import { Sala } from "../model/bean/Sala";
import { ICrudSala } from "../interfaces/ICrudSala";

export class ExecuterSala {

    constructor(
        private daoSala: ICrudSala
    ) { }

    async create(user: Sala) {
        const salaOut: Sala = await this.daoSala.create(user);
        return salaOut;
    }

    async read(): Promise<Sala[]> {
        const salaOut: Sala[] = await this.daoSala.read();
        return salaOut;
    }

    async readSala(id: string): Promise<Sala | null> {
        const salaOut: Sala | null = await this.daoSala.readSala(id);
        return salaOut;
    }

    async update(user: Sala): Promise<Sala> {
        const salaOut: Sala = await this.daoSala.update(user);
        return salaOut;
    }

    async delete(id: string): Promise<Sala> {
        const salaOut: Sala = await this.daoSala.delete(id);
        return salaOut;
    }

}