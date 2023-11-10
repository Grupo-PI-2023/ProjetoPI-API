import { Sessao } from "../model/bean/Sessao";
import { ICrudSessao } from "../interfaces/ICrudSessao";

export class ExecuterSessao {

    constructor(
        private daoSessao: ICrudSessao
    ) { }

    async create(user: Sessao) {
        const sessaoOut: Sessao = await this.daoSessao.create(user);
        return sessaoOut;
    }

    async read(): Promise<Sessao[]> {
        const sessaoOut: Sessao[] = await this.daoSessao.read();
        return sessaoOut;
    }

    async readSessao(id: string): Promise<Sessao | null> {
        const sessaoOut: Sessao | null = await this.daoSessao.readSessao(id);
        return sessaoOut;
    }

    async update(user: Sessao): Promise<Sessao> {
        const sessaoOut: Sessao = await this.daoSessao.update(user);
        return sessaoOut;
    }

    async delete(id: string): Promise<Sessao> {
        const sessaoOut: Sessao = await this.daoSessao.delete(id);
        return sessaoOut;
    }

}