import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { ProductEntity } from './entities/product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [
    AuthModule,
    UserModule,
    TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
