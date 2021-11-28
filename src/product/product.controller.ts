import { Body, ConflictException, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateProductDTO } from './dto/CreateProductDTO';
import { ProductService } from './product.service';

@Controller('product')
@UseGuards(AuthGuard())
export class ProductController {

    constructor(private readonly productService: ProductService){}

    @Get()
    async getProducts(@Res() res){
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({
            data: products
        });
    }

    @Get('/:productId')
    async getProduct(@Res() res, @Param('productId') id){
        const product = await this.productService.getProductById(id);

        if(!product){
            throw new NotFoundException('Product does not exists');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Found',
            data: product
        });
    }

    @Post('/create')
    async createProduct(@Res() res, @Body() createProductDTO: CreateProductDTO){
        const product = await this.productService.createProduct(createProductDTO);

        return res.status(HttpStatus.CREATED).json({
            message: 'Received',
            data: product
        });
    }

    @Put('/update/:productId')
    async updateProduct(@Res() res, @Body() createProductDTO: CreateProductDTO, @Param('productId') id){
        const product = await this.productService.updateProduct(id, createProductDTO);

        if(!product){
            throw new NotFoundException('Product does not exists');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Product updated',
            data: product
        });
    }

    @Delete('/delete/:productId')
    async deleteProduct(@Res() res, @Param('productId') id){
        const product = await this.productService.deleteProductById(id);

        if(!product){
            throw new NotFoundException('Product does not exists');
        }

        return res.status(HttpStatus.OK).json({
            message: 'Deleted',
            data: product
        });
    }
}   
