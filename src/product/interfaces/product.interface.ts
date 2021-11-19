export interface IProduct {
    
    readonly product_id?: number;
    readonly name: string;
    readonly category: string;
    readonly unitPrice: number;
    readonly quantity: number;
    readonly createdAt: Date;
}