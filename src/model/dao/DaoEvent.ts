import { ICrudEvent } from "../../interfaces/ICrudEvent";
import { Event } from "../bean/Event";


import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class DaoEvent implements ICrudEvent {

    async create(event: Event): Promise<Event> {
        let newUser: Event = new Event(event);

        await prisma.event.create({
            data: event
        }).then(async (event) => {
            newUser = event;
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return newUser;
    }

    async read(): Promise<Event[]> {
        let users: Event[] = [];

        await prisma.event.findMany().then(async (result : any) => {
            users = result;
            await prisma.$disconnect();
        }).catch(async (e) => {
            console.error(e);
            await prisma.$disconnect();
            process.exit(1);
        })

        return users;
    }

    async readEvent(id: string): Promise<Event | null> {
        let userReturned: Event | null = null;

        await prisma.event.findUnique({
            where: {
                id: id
            }
        }).then(async (event) => {
            userReturned = event;
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return userReturned;
    }

    async update(event: Event): Promise<Event> {
        let userUpdated: Event = new Event(event);

        await prisma.event.update({
            where: {
                id: event.id
            },
            data: event
        }).then(async () => {
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return userUpdated;
    }

    async delete(id: string): Promise<Event> {
        let userDeleted: Event = new Event({ emailEvento: "", nomeEvento: "", assuntoPrincipal: "", descricao: "", tipo: "", local: "",cep: "", horarioInicio: "", horarioFim: "", dataInicio: new Date(), dataFinal: new Date(), privado: false, anais: false, certificados: false, logo: "", periodo: "", createdAt: new Date(), comissaoId: "" });

        await prisma.event.delete({
            where: {
                id
            }
        }).then(async (event) => {
            userDeleted = event;
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return userDeleted;
    }

}