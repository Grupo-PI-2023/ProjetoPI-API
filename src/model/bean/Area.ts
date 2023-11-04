import { uuid } from "uuidv4";

export class Area {

    public readonly id: string;
    public nome: string;
    public eventoId: string;
    public comissaoId?: string | null;

    constructor(props: Omit<Area, 'id'>, id?: string) {
        this.nome = props.nome;
        this.comissaoId = props.comissaoId;
        this.eventoId = props.eventoId;

        if (id) {
            this.id = id
        } else {
            this.id = uuid();
        }
    }

}