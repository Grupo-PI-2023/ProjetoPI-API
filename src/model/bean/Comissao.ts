import { uuid } from "uuidv4";
import { User } from "./User";
import { Area } from "./Area";

export class Comissao extends User {
// export class Comissao {
    public readonly id: string;
   
    public turno: string;
    public lattes: string;
    public adm: boolean | null ;
    public organizador: boolean | null ;
    public avaliador: boolean | null ;
    public chair: boolean | null ;
    // public areas: Area[];

    // constructor(props: Comissao) {
    constructor(props: Omit<Comissao, 'id'>, id?: string) {
        super(props);
        this.turno = props.turno;
        this.lattes = props.lattes;
        this.adm = props.adm;
        this.organizador = props.organizador;
        this.avaliador = props.avaliador;
        this.chair = props.chair;
        // this.areas = props.areas;

        if (id) {
            this.id = id
        } else {
            this.id = uuid();
        }
    }

}