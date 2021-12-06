import { Role } from "src/user/entities/user.enum";

export interface ILoginStatus{

    id: string;
    username: string;
    role: Role;
    accessToken: any;
    expireIn: any;
    
}