import { ICrudArea } from "../../interfaces/ICrudArea";
import { Area } from "../bean/Area";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class DaoArea implements ICrudArea {
    async readAreasByEvent(id: string): Promise<Area[]> {
        let area: Area[] = []
        await prisma.area.findMany({
            where: {
                eventoId: id
            }
        }).then(async (result) => {
            area = result;
            await prisma.$disconnect();
        }).catch(async (e) => {
            console.error(e);
            await prisma.$disconnect();
            process.exit(1);
        })
        return area;
    }

    async create(area: Area): Promise<Area> {
        let newUser: Area = new Area(area);

        await prisma.area.create({
            data: area
        }).then(async (area) => {
            newUser = area;
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return newUser;
    }

    async read(): Promise<Area[]> {
        let users: Area[] = [];

        await prisma.area.findMany().then(async (result) => {
            users = result;
            await prisma.$disconnect();
        }).catch(async (e) => {
            console.error(e);
            await prisma.$disconnect();
            process.exit(1);
        })

        return users;
    }

    async readArea(id: string): Promise<Area | null> {
        let userReturned: Area | null = null;

        await prisma.area.findUnique({
            where: {
                id: id
            }
        }).then(async (area) => {
            userReturned = area;
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return userReturned;
    }

    async update(area: Area): Promise<Area> {
        let userUpdated: Area = new Area(area);

        await prisma.area.update({
            where: {
                id: area.id
            },
            data: area
        }).then(async () => {
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return userUpdated;
    }

    async delete(id: string): Promise<Area> {
        let userDeleted = new Area({ nome: "", eventoId: "" });
        await prisma.area.delete({
            where: {
                id
            }
        }).then(async (area) => {
            userDeleted = area;
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return userDeleted;
    }

}