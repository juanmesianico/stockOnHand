export interface IProduct {
    
    product_id?: number;
    name: string;
    category: string;
    unitPrice: number;
    quantity: number;
    photoURL: string;
    createdAt?: Date;
}