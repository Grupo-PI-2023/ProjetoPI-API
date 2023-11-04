import { Request, Response } from "express";
import { ExecuterAluno } from "../executors/ExecuterAluno";
import { Aluno } from "../model/bean/Aluno";

export class ControllerAluno {
    constructor(
        private executerAluno: ExecuterAluno
    ) { }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { cpf, instituicao, periodo, curso, autor, apresentador, presenca, email, name, senha } = req.body;
            const newAluno =  new Aluno({ cpf, instituicao, periodo, curso, autor, apresentador, presenca, email, name, senha });
            const alunoCreated = await this.executerAluno.create(newAluno);
            return res.status(200).json({ message: "Aluno created sussessfully", alunoCreated });
        } catch (error) {
            return res.status(204).json(error)
        }
    }

    async readAluno(req: Request, res: Response): Promise<Response> {
        try {
            const Aluno = await this.executerAluno.readAluno(req.params.id);
            if (Aluno) {
                return res.status(200).json({ message: "Aluno founded", Aluno })
            } else {
                return res.status(204).json({ message: "Aluno does not exists" })
            }
        } catch (error) {
            return res.json(error)
        }
    }

    async read(req: Request, res: Response): Promise<Response> {
        try {
            const comissoes = await this.executerAluno.read();
            return res.status(200).json({ message: "comissoes", comissoes })
        } catch (error) {
            return res.json(error)
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const { cpf, instituicao, periodo, curso, autor, apresentador, presenca, email, name, senha  } = req.body;
            const aluno =  new Aluno({ cpf, instituicao, periodo, curso, autor, apresentador, presenca, email, name, senha }, req.params.id);

            const alunoUpdated = await this.executerAluno.update(aluno);
            return res.status(200).json({ message: "Aluno uptaded sussessfully", alunoUpdated })
        } catch (error) {
            return res.json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const Aluno = await this.executerAluno.delete(req.params.id);
            return res.status(200).json({ message: "Aluno deleted", Aluno })
        } catch (error) {
            return res.json(error)
        }
    }

}