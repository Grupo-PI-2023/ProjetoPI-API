
import { Aluno } from "../model/bean/Aluno"
export interface ICrudAluno {
    create(aluno: Aluno): Promise<Aluno>;
    read(): Promise<Aluno[]>;
    readAluno(id: string): Promise<Aluno | null>;
    update(aluno: Aluno): Promise<Aluno>;
    delete(id: string): Promise<Aluno>;

}