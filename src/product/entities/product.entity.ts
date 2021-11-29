import { SupplierEntity } from "src/supplier/entities/supplier.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class ProductEntity{

    @PrimaryGeneratedColumn()
    product_id: number;

    @Column({unique: true})
    name: string;

    @Column()
    category: string;

    @Column()
    unitPrice: number;

    @Column()
    quantity: number;
    
    @Column({ default: 'https://media.istockphoto.com/photos/new-product-round-red-seal-picture-id188020497?k=20&m=188020497&s=612x612&w=0&h=14l5TS8674-Q2dx3PHcciIEuTZ9ULXH4lUObdWmBOIY='})
    photoURL: string;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;

    @OneToMany(type => SupplierEntity, supplier => supplier.products)
    supplier: SupplierEntity;
}