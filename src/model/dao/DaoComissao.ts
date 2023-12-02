import { ICrudComissao } from "../../interfaces/ICrudComissao";
import { Comissao } from "../bean/Comissao";
import { Area, Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export class DaoComissao implements ICrudComissao {
    async readAdmins(): Promise<Comissao[]> {
        let users: Comissao[] = [];

        await prisma.comissao.findMany({
            where: {
                adm: true,
            }
        }).then(async (result) => {
            users = result;
            await prisma.$disconnect();
        }).catch(async (e) => {
            console.error(e);
            await prisma.$disconnect();
            process.exit(1);
        })

        return users;
    }

    async create(comissao: Comissao, areas: string[]): Promise<Comissao> {
        let newUser: Comissao = new Comissao(comissao);
        const areass: string[] = []
        // const areas: Area[] = [{nome: "", id: "ds", eventoId: "sdd" }]
        // const eventoId: string
        // const areaData = areas?.map((area: Prisma.AreaCreateInput) => {
        //     return { nome: area?.nome, id: area?.id, evento: }
        //     return { nome: area?.nome, id: area?.id, evento: area?.evento }
        // })

        await prisma.comissao.create({
            data: {
                id: comissao.id,
                cpf: comissao.cpf,
                email: comissao.email,
                instituicao: comissao.instituicao,
                name: comissao.name,
                senha: comissao.senha,
                turno: comissao.turno,
                lattes: comissao.lattes,
                areaConhecimento: {
                    // connectOrCreate: {
                    //     where: {
                    //       id: 9,
                    //     },
                    //     create: {
                    //       name: 'New Category',
                    //       id: 9,
                    //     },
                    //   },
                    // connect: areass.map(area => ({ id: area })),
                    // connect: areas.map(area => ({ id: area.id })),
                    connect: areas.map(area => ({ id: area })),
                },
                adm: comissao.adm,
                organizador: comissao.organizador,
                avaliador: comissao.avaliador,
                chair: comissao.chair,
                certificado: comissao.certificado,
            },
            include: {
                areaConhecimento: true
            },
            // select: {
            //     areaConhecimento: true
            // }
            
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
            },
            include: {
                Event: true,
                areaConhecimento: true
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