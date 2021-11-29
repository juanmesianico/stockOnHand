import { ProductEntity } from "src/product/entities/product.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity("suppliers")
export class SupplierEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true})
    name: string;

    @Column({unique: true, nullable: false})
    code: string;

    @Column({unique: true})
    email: string;

    @Column()
    phone_number: number;

    @ManyToOne(type => ProductEntity, product => product.supplier)
    products: ProductEntity[];
}
