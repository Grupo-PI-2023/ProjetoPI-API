import { Request, Response } from "express";
import { Sessao } from "../model/bean/Sessao";
import { ExecuterSessao } from "../executors/ExecuterSessao";

export class ControllerSessao {
    constructor(
        private executerSessao: ExecuterSessao
    ) { }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { tempoSessao, tempoApresentacao, anfiteatro, salaId, horario, comissaoId } = req.body;
            const newSessao = new Sessao({ tempoSessao, tempoApresentacao, anfiteatro, salaId, horario, comissaoId });

            const userCreated = await this.executerSessao.create(newSessao);
            return res.status(200).json({ message: "sessao created sussessfully", userCreated });
        } catch (error) {
            return res.status(204).json(error)
        }
    }

    async readSessao(req: Request, res: Response): Promise<Response> {
        try {
            const sessao = await this.executerSessao.readSessao(req.params.id);
            if (sessao) {
                return res.status(200).json({ message: "sessao founded", sessao })
            } else {
                return res.status(204).json({ message: "sessao does not exists" })
            }
        } catch (error) {
            return res.json(error)
        }
    }

    async read(req: Request, res: Response): Promise<Response> {
        try {
            const sessaos = await this.executerSessao.read();
            return res.status(200).json({ message: "sessaos", sessaos })
        } catch (error) {
            return res.json(error)
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const { tempoSessao, tempoApresentacao, anfiteatro, salaId, horario, comissaoId } = req.body;
            const sessao = new Sessao({ tempoSessao, tempoApresentacao, anfiteatro, salaId, horario, comissaoId }, req.params.id);

            const sessaoUpdated = await this.executerSessao.update(sessao);
            return res.status(200).json({ message: "sessao uptaded sussessfully", sessaoUpdated })
        } catch (error) {
            return res.json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const sessao = await this.executerSessao.delete(req.params.id);
            return res.status(200).json({ message: "sessao deleted", sessao })
        } catch (error) {
            return res.json(error)
        }
    }

}