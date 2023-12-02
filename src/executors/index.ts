import { ControllerComissao, ControllerArea, ControllerAluno, ControllerEvent, ControllerSala, ControllerSessao } from "../controller";
import { DaoEvent, DaoAluno, DaoArea, DaoComissao, DaoSala, DaoSessao } from "../model/dao";
import { ExecuterEvent } from "./ExecuterEvent";
import { ExecuterComissao } from "./ExecuterComissao";
import { ExecuterAluno } from "./ExecuterAluno";
import { ExecuterArea } from "./ExecuterArea";
import { ExecuterSala } from "./ExecuterSala";
import { ExecuterSessao } from "./ExecuterSessao";
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

const ds = new DaoSala()
const es = new ExecuterSala(ds)
const contSala = new ControllerSala(es)

const dss = new DaoSessao()
const ess = new ExecuterSessao(dss)
const contSessao = new ControllerSessao(ess)

export { contEvent, contComissao, contAluno, contArea, contSala, contSessao };

// executer for USER
// const du = new DaoUser();
// const eu = new ExecuterUser(du);
// const contUser = new ControllerUser(eu);