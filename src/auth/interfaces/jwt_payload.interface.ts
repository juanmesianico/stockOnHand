import { Role } from "src/user/entities/user.enum";

export interface IJwtPayload{
    username: string;
    role: Role
}