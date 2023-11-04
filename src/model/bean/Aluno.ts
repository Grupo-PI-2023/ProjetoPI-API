import { uuid } from "uuidv4";
import { User } from "./User";

export class Aluno extends User {
    public readonly id: string;
    public periodo: string;
    public curso: string;
    public autor: boolean;
    public apresentador: boolean | null;
    public presenca: boolean | null;

    constructor(props: Omit<Aluno, 'id'>, id?: string) {
        super(props);
        this.instituicao = props.instituicao;
        this.periodo = props.periodo;
        this.curso = props.curso;
        this.autor = props.autor;
        this.apresentador = props.apresentador;
        this.presenca = props.presenca;
        // this.id = props.id

        if (id) {
            this.id = id
        } else {
            this.id = uuid();
        }
    }

}