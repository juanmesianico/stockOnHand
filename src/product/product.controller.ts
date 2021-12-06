import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Query, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateProductDTO } from './dto/CreateProductDTO';
import { ProductService } from './product.service';


@Controller('product')
export class ProductController {

    constructor(private readonly productService: ProductService){}

    @Get()
    async getProducts(@Res() res){
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).send(products);
    }

    @Get('/:productId')
    async getProduct(@Res() res, @Param('productId') id){
        const product = await this.productService.getProductById(id);

        if(!product){
            throw new NotFoundException('Product does not exists');
        }

        return res.status(HttpStatus.OK).send(product);
    }

    @Post('/create')
    async createProduct(@Res() res, @Body() createProductDTO: CreateProductDTO){
        const product = await this.productService.createProduct(createProductDTO);

        return res.status(HttpStatus.OK).send(product);
    }

    @Put('/update/:productId')
    async updateProduct(@Res() res, @Body() createProductDTO: CreateProductDTO, @Param('productId') id){
        const product = await this.productService.updateProduct(id, createProductDTO);

        if(!product){
            throw new NotFoundException('Product does not exists');
        }

        return res.status(HttpStatus.OK).send(product);
    }

    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('productId') id){
        const product = await this.productService.deleteProductById(id);

        if(!product){
            throw new NotFoundException('Product does not exists');
        }

        return res.status(HttpStatus.OK).send(product);
    }
}   
