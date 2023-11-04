import { ControllerComissao, ControllerArea, ControllerAluno, ControllerEvent } from "../controller/";
import { DaoEvent, DaoAluno, DaoArea, DaoComissao } from "../model/dao/";
import { ExecuterEvent } from "./ExecuterEvent";
import { ExecuterComissao } from "./ExecuterComissao";
import { ExecuterAluno } from "./ExecuterAluno";
import { ExecuterArea } from "./ExecuterArea";
// import { ExecuterUser } from "./ExecuterUser";

const de = new DaoEvent()
const ee = new ExecuterEvent(de)
const contEvent = new ControllerEvent(ee)

const dc = new DaoComissao()
const ec = new ExecuterComissao(dc)
const contComissao = new ControllerComissao(ec)

const da = new DaoAluno()
const ea = new ExecuterAluno(da)
const contAluno = new ControllerAluno(ea)

const daa = new DaoArea()
const eaa = new ExecuterArea(daa)
const contArea = new ControllerArea(eaa)

export { contEvent, contComissao, contAluno, contArea };

// executer for USER
// const du = new DaoUser();
// const eu = new ExecuterUser(du);
// const contUser = new ControllerUser(eu);