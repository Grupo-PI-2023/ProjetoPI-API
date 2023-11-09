import { uuid } from "uuidv4";

export class Sessao {
    public readonly id: string;
    public tempoSessao: number;
    public tempoApresentacao: number;
    public anfiteatro: boolean | null;
    public salaId: string;
    public horario: number;
    public comissaoId: string;

    // constructor(props: Event) {
    constructor(props: Omit<Sessao, 'id'>, id?: string) {
        this.tempoSessao = props.tempoSessao;
        this.tempoApresentacao = props.tempoApresentacao;
        this.anfiteatro = props.anfiteatro;
        this.salaId = props.salaId;
        this.horario = props.horario;
        this.comissaoId = props.comissaoId;

        if (id) {
            this.id = id
        } else {
            this.id = uuid();
        }
    }

}