
// import { Area } from "../model/bean/Area";
import { Comissao } from "../model/bean/Comissao"
export interface ICrudComissao {
    create(comissao: Comissao, areas: string[]): Promise<Comissao>;
    read(): Promise<Comissao[]>;
    readComissao(id: string): Promise<Comissao | null>;
    readAdmins(): Promise<Comissao[]>
    update(comissao: Comissao): Promise<Comissao>;
    delete(id: string): Promise<Comissao>;

}