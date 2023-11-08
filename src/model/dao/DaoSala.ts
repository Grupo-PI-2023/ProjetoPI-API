import { ICrudSala } from "../../interfaces/ICrudSala";
import { Sala } from "../bean/Sala";


import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class DaoSala implements ICrudSala {

    async create(sala: Sala): Promise<Sala> {
        let newUser: Sala = new Sala(sala);

        await prisma.sala.create({
            data: sala
        }).then(async (Sala) => {
            newUser = Sala;
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return newUser;
    }

    async read(): Promise<Sala[]> {
        let users: Sala[] = [];

        await prisma.sala.findMany().then(async (result : any) => {
            users = result;
            await prisma.$disconnect();
        }).catch(async (e) => {
            console.error(e);
            await prisma.$disconnect();
            process.exit(1);
        })

        return users;
    }

    async readSala(id: string): Promise<Sala | null> {
        let userReturned: Sala | null = null;

        await prisma.sala.findUnique({
            where: {
                id: id
            }
        }).then(async (Sala) => {
            userReturned = Sala;
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return userReturned;
    }

    async update(sala: Sala): Promise<Sala> {
        let userUpdated: Sala = new Sala(sala);

        await prisma.sala.update({
            where: {
                id: sala.id
            },
            data: sala
        }).then(async () => {
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return userUpdated;
    }

    async delete(id: string): Promise<Sala> {
        let userDeleted: Sala = new Sala({ andar: 0, tipo: "", numero: 0, limitePessoas: 0, temaSala: "" });

        await prisma.sala.delete({
            where: {
                id
            }
        }).then(async (Sala) => {
            userDeleted = Sala;
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return userDeleted;
    }

}