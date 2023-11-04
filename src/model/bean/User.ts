import { uuid } from "uuidv4";

export class User {
    public name: string;
    public email: string;
    public senha: string;
    public cpf: string;
    public instituicao: string;
    public certificado?: string | null;
    
    constructor(props: User) {
    // constructor(props: Omit<User, 'id'>, id?: string) {
        this.email = props.email;
        this.name = props.name;
        this.senha = props.senha;
        this.cpf = props.cpf;
        this.instituicao = props.instituicao;
        this.certificado = props.certificado;
        // this.id = props.id

        // if (id) {
        //     this.id = id
        // } else {
        //     this.id = uuid();
        // }
    }

}