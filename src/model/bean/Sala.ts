import { uuid } from "uuidv4";

export class Sala {
    public readonly id: string;
    public andar: number;
    public tipo: string;
    public numero: number;
    public limitePessoas: number;
    public temaSala: string;
    
    //constructor(props: Sala) {
    constructor(props: Omit<Sala, 'id'>, id?: string) {
        this.andar = props.andar;
        this.tipo = props.tipo;
        this.numero = props.numero;
        this.limitePessoas = props.limitePessoas;
        this.temaSala = props.temaSala;
        // this.id = props.id

        if (id) {
            this.id = id
        } else {
            this.id = uuid();
        }
    
    }

}