
import { Comissao } from "../model/bean/Comissao"
export interface ICrudComissao {
    create(comissao: Comissao): Promise<Comissao>;
    read(): Promise<Comissao[]>;
    readComissao(id: string): Promise<Comissao | null>;
    update(comissao: Comissao): Promise<Comissao>;
    delete(id: string): Promise<Comissao>;

}