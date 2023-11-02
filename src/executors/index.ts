import { ControllerUser } from "../controller";
import { DaoUser } from "../model/dao/DaoUser";
import { ExecuterUser } from "./ExecuterUser";
import { DaoEvent } from "../model/dao/DaoEvent";

//USER LAYERS
const du = new DaoUser();
const eu = new ExecuterUser(du);
const contUser = new ControllerUser(eu);

const de = new DaoEvent()
const ee = new ExecuterUser(de)
const contEvent = new ControllerUser(ee)

export { contUser, contEvent };