import { ICrudAluno } from "../../interfaces/ICrudAluno";
import { Aluno } from "../bean/Aluno";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class DaoAluno implements ICrudAluno {

    async create(aluno: Aluno): Promise<Aluno> {
        let newUser: Aluno = new Aluno(aluno);

        await prisma.aluno.create({
            data: aluno
        }).then(async (aluno) => {
            newUser = aluno;
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return newUser;
    }

    async read(): Promise<Aluno[]> {
        let users: Aluno[] = [];

        await prisma.aluno.findMany().then(async (result) => {
            users = result;
            await prisma.$disconnect();
        }).catch(async (e) => {
            console.error(e);
            await prisma.$disconnect();
            process.exit(1);
        })

        return users;
    }

    async readAluno(id: string): Promise<Aluno | null> {
        let userReturned: Aluno | null = null;

        await prisma.aluno.findUnique({
            where: {
                id: id
            }
        }).then(async (aluno) => {
            userReturned = aluno;
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return userReturned;
    }

    async update(aluno: Aluno): Promise<Aluno> {
        let userUpdated: Aluno = new Aluno(aluno);

        await prisma.aluno.update({
            where: {
                id: aluno.id
            },
            data: aluno
        }).then(async () => {
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return userUpdated;
    }

    async delete(id: string): Promise<Aluno> {
        let userDeleted: Aluno = new Aluno({ cpf: "", instituicao: "", periodo: "", curso: "", autor: false, apresentador: false, presenca: false, email: "", name: "", senha: "" });

        await prisma.aluno.delete({
            where: {
                id
            }
        }).then(async (aluno) => {
            userDeleted = aluno;
            await prisma.$disconnect()
        }).catch(async (e) => {
            console.error(e)
            await prisma.$disconnect()
            process.exit(1)
        })

        return userDeleted;
    }

}