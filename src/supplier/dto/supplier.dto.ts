import { IsNotEmpty } from "class-validator";

export class supplierDTO {

    @IsNotEmpty() readonly id: string;
    readonly name: string;
    @IsNotEmpty() readonly code: string;
    readonly email: string;
    readonly phone_number: number;
    readonly products?: number[];
}