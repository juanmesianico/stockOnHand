import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from "./dto/CreateProductDTO";
import { IProduct } from './interfaces/product.interface';

@Injectable()
export class ProductService {

    constructor(){}

    async getProducts(): Promise<IProduct[]>{
        return null;
    }

    async getProductById(productId: string): Promise<IProduct>{
        return null;
    }

    async createProduct(createProductDTO: CreateProductDTO): Promise<IProduct>{
        return null;
    }

    async updateProduct(productId: string, createProductDTO: CreateProductDTO): Promise<IProduct>{
        return null;
    }

    async deleteProductById(productId: string): Promise<IProduct>{
        return null;
    }
}
