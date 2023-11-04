import { Aluno } from "../model/bean/Aluno";
import { ICrudAluno } from "../interfaces/ICrudAluno";

export class ExecuterAluno {

    constructor(
        private daoAluno: ICrudAluno
    ) { }

    async create(Aluno: Aluno) {
        const alunoOut: Aluno = await this.daoAluno.create(Aluno);
        return alunoOut;
    }

    async read(): Promise<Aluno[]> {
        const alunoOut: Aluno[] = await this.daoAluno.read();
        return alunoOut;
    }

    async readAluno(id: string): Promise<Aluno | null> {
        const alunoOut: Aluno | null = await this.daoAluno.readAluno(id);
        return alunoOut;
    }

    async update(Aluno: Aluno): Promise<Aluno> {
        const alunoOut: Aluno = await this.daoAluno.update(Aluno);
        return alunoOut;
    }

    async delete(id: string): Promise<Aluno> {
        const alunoOut: Aluno = await this.daoAluno.delete(id);
        return alunoOut;
    }

}