import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { SupplierEntity } from 'src/supplier/entities/supplier.entity';
import { SupplierModule } from 'src/supplier/supplier.module';
import { UserModule } from 'src/user/user.module';
import { ProductEntity } from './entities/product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [
    AuthModule,
    SupplierModule,
    UserModule,
    TypeOrmModule.forFeature([ProductEntity, SupplierEntity])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
