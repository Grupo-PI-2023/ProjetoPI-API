import { Request, Response } from "express";
import { ExecuterComissao } from "../executors/ExecuterComissao";
import { Comissao } from "../model/bean/Comissao";

export class ControllerComissao {
    constructor(
        private executerComissao: ExecuterComissao
    ) { }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { email, name, cpf, instituicao, turno, lattes, senha, adm, organizador, avaliador, chair, areaConhecimento  } = req.body;
            const newComissao = new Comissao({ email, name, cpf, instituicao, turno, lattes, senha, adm, organizador, avaliador, chair });
            const comissaoCreated = await this.executerComissao.create(newComissao, areaConhecimento);
            return res.status(200).json({ message: "comissao created sussessfully", comissaoCreated });
        } catch (error) {
            return res.status(204).json(error)
        }
    }

    async readComissao(req: Request, res: Response): Promise<Response> {
        try {
            const comissao = await this.executerComissao.readComissao(req.params.id);
            if (comissao) {
                return res.status(200).json({ message: "comissao founded", comissao })
            } else {
                return res.status(204).json({ message: "comissao does not exists" })
            }
        } catch (error) {
            return res.json(error)
        }
    }

    async readAdmins(req: Request, res: Response): Promise<Response> {
        try {
            const admin = req.query.adm
            if(admin){
                const comissao = await this.executerComissao.readAdmins();
                if (comissao) {
                    return res.status(200).json({ message: "comissao founded", comissao })
                } else {
                    return res.status(204).json({ message: "comissao does not exists" })
                }
            }else{
                const comissoes = await this.executerComissao.read();
                return res.status(200).json({ message: "comissoes", comissoes })
            }
        } catch (error) {
            return res.json(error)
        }
    }

    async read(req: Request, res: Response): Promise<Response> {
        try {
            const comissoes = await this.executerComissao.read();
            return res.status(200).json({ message: "comissoes", comissoes })
        } catch (error) {
            return res.json(error)
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const { email, name, cpf, instituicao, turno, lattes, senha, adm, organizador, avaliador, chair } = req.body;
            const comissao = new Comissao({ email, name, cpf, instituicao, turno, lattes, senha, adm, organizador, avaliador, chair }, req.params.id);

            const comissaoUpdated = await this.executerComissao.update(comissao);
            return res.status(200).json({ message: "comissao uptaded sussessfully", comissaoUpdated })
        } catch (error) {
            return res.json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const comissao = await this.executerComissao.delete(req.params.id);
            return res.status(200).json({ message: "comissao deleted", comissao })
        } catch (error) {
            return res.json(error)
        }
    }

}
