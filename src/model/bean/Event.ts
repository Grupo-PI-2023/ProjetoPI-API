import { uuid } from "uuidv4";

export class Event {

    public readonly id: string;
    public email: string;
    public nome: string;
    public descricao: string;
    public tipo: string;
    public assuntoPrincipal: string;
    public local: string;
    public dataInicio: Date;
    public dataFinal: Date;
    public privado: boolean;
    public anais: boolean;
    public certificados: boolean;
    public logo?: string | null;
    public periodo: string;
    public createdAt: Date;    
    public comissaoId: string;

    // constructor(props: Event) {
    constructor(props: Omit<Event, 'id'>, id?: string) {
        this.email = props.email;
        this.nome = props.nome;
        this.descricao = props.descricao;
        this.tipo = props.tipo;
        this.assuntoPrincipal = props.assuntoPrincipal;
        this.local = props.local;
        this.dataInicio = props.dataInicio;
        this.dataFinal = props.dataFinal;
        this.privado = props.privado;
        this.anais = props.anais;
        this.certificados = props.certificados;
        this.logo = props.logo;
        this.periodo = props.periodo;
        this.createdAt = props.createdAt;
        this.comissaoId = props.comissaoId;

        if (id) {
            this.id = id
        } else {
            this.id = uuid();
        }
    }

}