import { ICrudComissao } from "../../interfaces/ICrudComissao";
import { Comissao } from "../bean/Comissao";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class DaoComissao implements ICrudComissao {

    async create(comissao: Comissao): Promise<Comissao> {
        let newUser: Comissao = new Comissao(comissao);

        await prisma.comissao.create({
            data: comissao
        }).then(async (comissao) => {
            newUser = comissao;
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return newUser;
    }

    async read(): Promise<Comissao[]> {
        let users: Comissao[] = [];

        await prisma.comissao.findMany().then(async (result) => {
            users = result;
            await prisma.$disconnect();
        }).catch(async (e) => {
            console.error(e);
            await prisma.$disconnect();
            process.exit(1);
        })

        return users;
    }

    async readComissao(id: string): Promise<Comissao | null> {
        let userReturned: Comissao | null = null;

        await prisma.comissao.findUnique({
            where: {
                id: id
            }
        }).then(async (comissao) => {
            userReturned = comissao;
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return userReturned;
    }

    async update(comissao: Comissao): Promise<Comissao> {
        let userUpdated: Comissao = new Comissao(comissao);

        await prisma.comissao.update({
            where: {
                id: comissao.id
            },
            data: comissao
        }).then(async () => {
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return userUpdated;
    }

    async delete(id: string): Promise<Comissao> {
        let userDeleted = new Comissao({ email: "", name: "", cpf: "", instituicao: "", turno: "", lattes: "", senha: "", adm: false, organizador: false, avaliador: false, chair: false });

        await prisma.comissao.delete({
            where: {
                id
            }
        }).then(async (comissao) => {
            userDeleted = comissao;
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return userDeleted;
    }

}