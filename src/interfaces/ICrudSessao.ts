import { Sessao } from "../model/bean/Sessao"
export interface ICrudSessao {
    create(sessao: Sessao): Promise<Sessao>;
    read(): Promise<Sessao[]>;
    readSessao(id: string): Promise<Sessao | null>;
    update(sessao: Sessao): Promise<Sessao>;
    delete(id: string): Promise<Sessao>;

}