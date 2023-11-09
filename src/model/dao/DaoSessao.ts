import { ICrudSessao } from "../../interfaces/ICrudSessao";
import { Sessao } from "../bean/Sessao";


import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class DaoSessao implements ICrudSessao {

    async create(sessao: Sessao): Promise<Sessao> {
        let newUser: Sessao = new Sessao(sessao);

        await prisma.sessao.create({
            data: sessao
        }).then(async (sessao) => {
            newUser = sessao;
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return newUser;
    }

    async read(): Promise<Sessao[]> {
        let users: Sessao[] = [];

        await prisma.sessao.findMany().then(async (result : any) => {
            users = result;
            await prisma.$disconnect();
        }).catch(async (e) => {
            console.error(e);
            await prisma.$disconnect();
            process.exit(1);
        })

        return users;
    }

    async readSessao(id: string): Promise<Sessao | null> {
        let userReturned: Sessao | null = null;

        await prisma.sessao.findUnique({
            where: {
                id: id
            }
        }).then(async (sessao) => {
            userReturned = sessao;
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return userReturned;
    }

    async update(sessao: Sessao): Promise<Sessao> {
        let userUpdated: Sessao = new Sessao(sessao);

        await prisma.sessao.update({
            where: {
                id: sessao.id
            },
            data: sessao
        }).then(async () => {
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return userUpdated;
    }

    async delete(id: string): Promise<Sessao> {
        let userDeleted: Sessao = new Sessao({ tempoSessao: 0, tempoApresentacao: 0, anfiteatro: false, salaId: "", horario: 0, comissaoId: "" });

        await prisma.sessao.delete({
            where: {
                id
            }
        }).then(async (sessao) => {
            userDeleted = sessao;
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return userDeleted;
    }

}