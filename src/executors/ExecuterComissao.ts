import { Comissao } from "../model/bean/Comissao";
import { ICrudComissao } from "../interfaces/ICrudComissao";

export class ExecuterComissao {

    constructor(
        private daoComissao: ICrudComissao
    ) { }

    async create(comissao: Comissao) {
        const comissaoOut: Comissao = await this.daoComissao.create(comissao);
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

    async update(comissao: Comissao): Promise<Comissao> {
        const comissaoOut: Comissao = await this.daoComissao.update(comissao);
        return comissaoOut;
    }

    async delete(id: string): Promise<Comissao> {
        const comissaoOut: Comissao = await this.daoComissao.delete(id);
        return comissaoOut;
    }

}