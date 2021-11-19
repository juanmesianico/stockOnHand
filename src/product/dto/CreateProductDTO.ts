import { IProduct } from "../interfaces/product.interface";

export class CreateProductDTO implements IProduct {

    readonly name: string;
    readonly category: string;
    readonly unitPrice: number;
    readonly quantity: number;
    readonly createdAt: Date;
}
