import { ProductService } from './product.service';
export declare class ProductController {
    private ProductService;
    constructor(ProductService: ProductService);
    all(): Promise<import("./product.entity").ProductEntity[]>;
    create(title: string, image: string): Promise<import("./product.entity").ProductEntity>;
    get(id: number): Promise<import("./product.entity").ProductEntity>;
    update(id: number, title: string, image: string): Promise<any>;
    delete(id: number): Promise<any>;
}
