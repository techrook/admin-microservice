import { ProductService } from './product.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('products')
export class ProductController {
    constructor(private ProductService:ProductService){}
    @Get()
    async all(){
        return this.ProductService.all()
    }
    @Post()
    async create(
        @Body('title') title:string,
        @Body('image') image:string,
    ){
        return this.ProductService.create({title,image})
    }
    @Get(':id')
    async get(@Param('id')id:number){
        return this.ProductService.get(id)
    }
    @Put(':id')
    async update(
        @Param('id')id:number,
        @Body('title') title:string,
        @Body('image') image:string,
    ){
        return this.ProductService.update(id,{title,image})
    }
    @Delete(':id')
    async delete(
        @Param('id')id:number,
    ){
        return this.ProductService.delete(id)
    }
}

