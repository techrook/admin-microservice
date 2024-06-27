import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';
export declare class ProductService {
    private readonly productRepository;
    constructor(productRepository: Repository<ProductEntity>);
    all(): Promise<ProductEntity[]>;
    create(data: any): Promise<ProductEntity>;
    get(id: number): Promise<ProductEntity>;
    update(id: number, data: any): Promise<any>;
    delete(id: number): Promise<any>;
}
