import { uuid } from "uuidv4";

export class Event {

    public readonly id: string;
    public emailEvento: string;
    public nomeEvento: string;
    public descricao: string;
    public tipo: string;
    public assuntoPrincipal: string;
    public local: string;
    public cep: string;
    public horarioInicio: string;
    public horarioFim: string;
    public dataInicio?: Date | null;
    public dataFinal?: Date | null;
    public privado: boolean;
    public anais: boolean;
    public certificados: boolean;
    public logo?: string | null;
    public periodo: string;
    public createdAt: Date;    
    public comissaoId: string;

    // constructor(props: Event) {
    constructor(props: Omit<Event, 'id'>, id?: string) {
        this.emailEvento = props.emailEvento;
        this.nomeEvento = props.nomeEvento;
        this.descricao = props.descricao;
        this.tipo = props.tipo;
        this.assuntoPrincipal = props.assuntoPrincipal;
        this.local = props.local;
        this.cep = props.cep;
        this.horarioInicio = props.horarioInicio;
        this.horarioFim = props.horarioFim;
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