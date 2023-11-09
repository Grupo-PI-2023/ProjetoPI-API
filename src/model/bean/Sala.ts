import { uuid } from "uuidv4";

export class Sala {
    public readonly id: string;
    public andar: number;
    public tipo: string;
    public numero: number;
    public limitePessoas: number;
    public temaSala: string;
    public eventId: string;
    
    //constructor(props: Sala) {
    constructor(props: Omit<Sala, 'id'>, id?: string) {
        this.andar = props.andar;
        this.tipo = props.tipo;
        this.numero = props.numero;
        this.limitePessoas = props.limitePessoas;
        this.temaSala = props.temaSala;
        this.eventId = props.eventId;
        // this.id = props.id

        if (id) {
            this.id = id
        } else {
            this.id = uuid();
        }
    
    }

}