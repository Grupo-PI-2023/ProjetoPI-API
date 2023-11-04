import { Request, Response } from "express";
import { Event } from "../model/bean/Event";
import { ExecuterEvent } from "../executors/ExecuterEvent";

export class ControllerEvent {
    constructor(
        private executerEvent: ExecuterEvent
    ) { }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { nomeEvento, emailEvento, assuntoPrincipal, descricao, tipo, local, cep, horarioInicio, horarioFim, dataInicio, dataFinal, privado, anais, certificados, logo, periodo, comissaoId } = req.body;
            const newEvent = new Event({ emailEvento, nomeEvento, assuntoPrincipal, descricao, tipo, local, cep, horarioInicio, horarioFim, dataInicio, dataFinal, privado, anais, certificados, logo, periodo, createdAt: new Date(), comissaoId });

            const userCreated = await this.executerEvent.create(newEvent);
            return res.status(200).json({ message: "event created sussessfully", userCreated });
        } catch (error) {
            return res.status(204).json(error)
        }
    }

    async readEvent(req: Request, res: Response): Promise<Response> {
        try {
            const event = await this.executerEvent.readEvent(req.params.id);
            if (event) {
                return res.status(200).json({ message: "event founded", event })
            } else {
                return res.status(204).json({ message: "event does not exists" })
            }
        } catch (error) {
            return res.json(error)
        }
    }

    async read(req: Request, res: Response): Promise<Response> {
        try {
            const events = await this.executerEvent.read();
            return res.status(200).json({ message: "events", events })
        } catch (error) {
            return res.json(error)
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const { nomeEvento, emailEvento, assuntoPrincipal, descricao, tipo, local, cep, horarioInicio, horarioFim, dataInicio, dataFinal, privado, anais, certificados, logo, periodo, comissaoId } = req.body;
            const event = new Event({ emailEvento, nomeEvento, assuntoPrincipal, descricao, tipo, local, cep, horarioInicio, horarioFim, dataInicio, dataFinal, privado, anais, certificados, logo, periodo, createdAt: new Date(), comissaoId }, req.params.id);

            const eventUpdated = await this.executerEvent.update(event);
            return res.status(200).json({ message: "event uptaded sussessfully", eventUpdated })
        } catch (error) {
            return res.json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const event = await this.executerEvent.delete(req.params.id);
            return res.status(200).json({ message: "event deleted", event })
        } catch (error) {
            return res.json(error)
        }
    }

}