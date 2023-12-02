import { Comissao } from "../model/bean/Comissao";
import { ICrudComissao } from "../interfaces/ICrudComissao";
import { Area } from "../model/bean/Area";

export class ExecuterComissao {

    constructor(
        private daoComissao: ICrudComissao
    ) { }

    async create(comissao: Comissao, areas: string[]) {
        const comissaoOut: Comissao = await this.daoComissao.create(comissao, areas);
        return comissaoOut;
    }

    async read(): Promise<Comissao[]> {
        const comissaoOut: Comissao[] = await this.daoComissao.read();
        return comissaoOut;
    }

    async readComissao(id: string): Promise<Comissao | null> {
        const comissaoOut: Comissao | null = await this.daoComissao.readComissao(id);
        return comissaoOut;
    }

    async readAdmins(): Promise<Comissao[]>{
        const comissaoOut: Comissao[] = await this.daoComissao.readAdmins();
        return comissaoOut; 
    }

    async update(comissao: Comissao): Promise<Comissao> {
        const comissaoOut: Comissao = await this.daoComissao.update(comissao);
        return comissaoOut;
    }

    async delete(id: string): Promise<Comissao> {
        const comissaoOut: Comissao = await this.daoComissao.delete(id);
        return comissaoOut;
    }

}