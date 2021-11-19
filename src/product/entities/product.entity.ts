import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
}