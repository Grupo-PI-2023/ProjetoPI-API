import { uuid } from "uuidv4";
import { User } from "./User";

export class Comissao extends User {
// export class Comissao {
    public readonly id: string;
   
    public turno: string;
    public lattes: string;
    public adm: boolean | null ;
    public organizador: boolean | null ;
    public avaliador: boolean | null ;
    public chair: boolean | null ;

    // constructor(props: Comissao) {
    constructor(props: Omit<Comissao, 'id'>, id?: string) {
        super(props);
        this.name = props.name;
        this.email = props.email;
        this.senha = props.senha;
        this.cpf = props.cpf;
        this.instituicao = props.instituicao;
        this.certificado = props.certificado;
        this.turno = props.turno;
        this.lattes = props.lattes;
        this.adm = props.adm;
        this.organizador = props.organizador;
        this.avaliador = props.avaliador;
        this.chair = props.chair;

        // if (props.adm) {
        //     this.adm = props.adm
        // } else {
        //     this.adm = false;
        // }

        // if (props.organizador) {
        //     this.organizador = props.organizador
        // } else {
        //     this.organizador = false;
        // }

        // if (props.avaliador) {
        //     this.avaliador = props.avaliador
        // } else {
        //     this.avaliador = false;
        // }
        
        // if (props.chair) {
        //     this.chair = props.chair
        // } else {
        //     this.chair = false;
        // }

        if (id) {
            this.id = id
        } else {
            this.id = uuid();
        }
    }

}