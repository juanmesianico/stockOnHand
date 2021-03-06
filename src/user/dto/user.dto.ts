import { IsEmail, IsNotEmpty } from "class-validator";
import { Role } from "../entities/user.enum";

export class UserDTO{

    @IsNotEmpty() readonly id: string;
    @IsNotEmpty() readonly username: string;
    @IsNotEmpty() @IsEmail() readonly email: string;
    readonly updatedAt: Date; 
    readonly active: boolean;
    readonly role: Role;
}