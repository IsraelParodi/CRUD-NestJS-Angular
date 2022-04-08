import {Injectable} from '@nestjs/common';
import {CreateProductDto} from './dto/create-product.dto';
import {UpdateProductDto} from './dto/update-product.dto';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';
import {Product, ProductDocument, ProductSchema} from "./schema/product.schema";
import {create} from "domain";

@Injectable()
export class ProductService {

    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {
    }

    async create(createProductDto: CreateProductDto) {
        return await new this.productModel(createProductDto).save();
    }

    async findAll() {
        return this.productModel.find();
    }

    findOne(id: string) {
        return this.productModel.findById(id);
    }

    update(id: string, updateProductDto: UpdateProductDto) {
        return this.productModel.findByIdAndUpdate(id, updateProductDto);
    }

    async remove(id: string) {
        return this.productModel.findByIdAndDelete(id);
    }
}
