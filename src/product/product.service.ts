import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity)private readonly productRepository:Repository<ProductEntity>
    ){}

    async all():Promise<ProductEntity[]>{
        return this.productRepository.find();
    }
    async create (data):Promise<ProductEntity>{
        return this.productRepository.save(data)
    }
    async get(id:number):Promise<ProductEntity>{
        return this.productRepository.findOne({ where: { id } });
    }
    async update(id:number, data):Promise<any>{
        return this.productRepository.update(id, data)
    }
    async delete(id:number):Promise<any>{
        return this.productRepository.delete(id)
    }
}
