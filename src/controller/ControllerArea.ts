import { Request, Response } from "express";
import { ExecuterArea } from "../executors/ExecuterArea";
import { Area } from "../model/bean/Area";

export class ControllerArea {
    constructor(
        private executerArea: ExecuterArea
    ) { }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const { nome, eventoId, comissaoId  } = req.body;
            const newArea = new Area({ nome, eventoId, comissaoId });
            const areaCreated = await this.executerArea.create(newArea);
            return res.status(200).json({ message: "Area created sussessfully", areaCreated });
        } catch (error) {
            return res.status(204).json(error)
        }
    }

    async readArea(req: Request, res: Response): Promise<Response> {
        try {
            const Area = await this.executerArea.readArea(req.params.id);
            if (Area) {
                return res.status(200).json({ message: "Area founded", Area })
            } else {
                return res.status(204).json({ message: "Area does not exists" })
            }
        } catch (error) {
            return res.json(error)
        }
    }

    async read(req: Request, res: Response): Promise<Response> {
        try {
            const areas = await this.executerArea.read();
            return res.status(200).json({ message: "areas", areas })
        } catch (error) {
            return res.json(error)
        }
    }

    async readAreasByEvent(req: Request, res: Response): Promise<Response> {
        try {
            const areas = await this.executerArea.readAreasByEvent(req.params.id);
            return res.status(200).json({ message: "areas", areas })
        } catch (error) {
            return res.json(error)
        }
    }

    async update(req: Request, res: Response): Promise<Response> {
        try {
            const { nome, eventoId, comissaoId } = req.body;
            const area = new Area({ nome, eventoId, comissaoId }, req.params.id);

            const AreaUpdated = await this.executerArea.update(area);
            return res.status(200).json({ message: "Area uptaded sussessfully", AreaUpdated })
        } catch (error) {
            return res.json(error)
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        try {
            const Area = await this.executerArea.delete(req.params.id);
            return res.status(200).json({ message: "Area deleted", Area })
        } catch (error) {
            return res.json(error)
        }
    }

}