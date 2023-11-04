// import { User } from "../model/bean/User";
// import { ICrudUser } from "../interfaces/ICrudUser";

// export class ExecuterUser {

//     constructor(
//         private daoUser: ICrudUser
//     ) { }

//     async create(user: User) {
//         const userOut = await this.daoUser.create(user);
//         return userOut;
//     }

//     async read(): Promise<User[]> {
//         const userOut: User[] = await this.daoUser.read();
//         return userOut;
//     }

//     async readUser(id: string): Promise<User | null> {
//         const userOut: User | null = await this.daoUser.readUser(id);
//         return userOut;
//     }

//     async update(user: User): Promise<User> {
//         const userOut: User = await this.daoUser.update(user);
//         return userOut;
//     }

//     async delete(id: string): Promise<User> {
//         const userOut: User = await this.daoUser.delete(id);
//         return userOut;
//     }

// }