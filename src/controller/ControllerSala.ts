import { Request, Response } from "express";
import { Sala } from "../model/bean/Sala";
import { ExecuterSala } from "../executors/ExecuterSala";

export class ControllerSala {
    constructor(
        private executerSala: ExecuterSala
    ) { }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { andar, tipo, numero, limitePessoas, temaSala, eventId } = req.body;
            const newSala = new Sala({ andar, tipo, numero, limitePessoas, temaSala, eventId });

            const sala = await this.executerSala.create(newSala);
            return res.status(200).json({ message: "sala created sussessfully", sala });
        } catch (error) {
            return res.status(204).json(error)
        }
    }

    async readSala(req: Request, res: Response): Promise<Response> {
        try {
            const sala = await this.executerSala.readSala(req.params.id);
            if (sala) {
                return res.status(200).json({ message: "sala founded", sala })
            } else {
                return res.status(204).json({ message: "sala does not exists" })
            }
        } catch (error) {
            return res.json(error)
        }
    }

    async read(req: Request, res: Response): Promise<Response> {
        try {
            const salas = await this.executerSala.read();
            return res.status(200).json({ message: "salas", salas })
        } catch (error) {
            return res.json(error)
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const { andar, tipo, numero, limitePessoas, temaSala, eventId } = req.body;
            const sala = new Sala({ andar, tipo, numero, limitePessoas, temaSala, eventId }, req.params.id);

            const salaUpdated = await this.executerSala.update(sala);
            return res.status(200).json({ message: "sala uptaded sussessfully", salaUpdated })
        } catch (error) {
            return res.json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const sala = await this.executerSala.delete(req.params.id);
            return res.status(200).json({ message: "sala deleted", sala })
        } catch (error) {
            return res.json(error)
        }
    }

}