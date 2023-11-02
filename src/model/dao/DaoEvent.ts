import { ICrudUser } from "../../interfaces/ICrudUser";
import { Event } from "../bean/Event";


import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class DaoEvent implements ICrudUser {

    async create(user: Event): Promise<Event> {
        let newUser: Event = new Event(user);

        await prisma.user.create({
            data: user
        }).then(async (user) => {
            newUser = user;
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

        await prisma.user.findMany().then(async (result) => {
            users = result;
            await prisma.$disconnect();
        }).catch(async (e) => {
            console.error(e);
            await prisma.$disconnect();
            process.exit(1);
        })

        return users;
    }

    async readUser(id: string): Promise<Event | null> {
        let userReturned: Event | null = null;

        await prisma.user.findUnique({
            where: {
                id: id
            }
        }).then(async (user) => {
            userReturned = user;
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return userReturned;
    }

    async update(user: Event): Promise<Event> {
        let userUpdated: Event = new Event(user);

        await prisma.user.update({
            where: {
                id: user.id
            },
            data: user
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
        let userDeleted: Event = new Event({ email: "", name: "" });

        await prisma.user.delete({
            where: {
                id
            }
        }).then(async (user) => {
            userDeleted = user;
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return userDeleted;
    }

}