import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDTO } from "./dto/CreateProductDTO";
import { ProductEntity } from './entities/product.entity';
import { IProduct } from './interfaces/product.interface';

@Injectable()
export class ProductService {

    constructor(@InjectRepository(ProductEntity) private readonly productRepository: Repository<ProductEntity>){}

    async getProducts(): Promise<IProduct[]>{
        const products = await this.productRepository.find();
        return products;
    }

    async getProductById(productId: string): Promise<IProduct>{
        const product = await this.productRepository.findOne(productId);
        return product;
    }

    async createProduct(createProductDTO: CreateProductDTO): Promise<IProduct>{
        
        try{
            const product = await this.productRepository.save(createProductDTO);
            return product;
        } catch {
            throw new HttpException('Product already exists', HttpStatus.BAD_REQUEST);
        }
    }

    async updateProduct(productId: string, createProductDTO: CreateProductDTO): Promise<any>{
        await this.productRepository.update(productId, createProductDTO);
        const updatedProduct = await this.productRepository.findOne(productId);
        return updatedProduct;
    }

    async deleteProductById(productId: string): Promise<any>{
        const deletedProduct = await this.productRepository.findOne(productId);
        await this.productRepository.delete(productId);
        return deletedProduct;
    }
}
