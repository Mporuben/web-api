import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Product} from "./products.entity";

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {
    this.initData()

  }

  async getProducts(): Promise<any[]> {
    try {
      const products = await this.productRepository.find()
      return products
    }catch (err) {
      console.error(err)
    }
  }

  async initData() {
    try {
      const products = await this.getProducts()
      if(!products.length) {
        console.log(products)
        this.productRepository.insert([
          {
            name: 'Product A',
            price: 12
          },
          {
            name: 'Product B',
            price: 18
          },
          {
            name: 'Product C',
            price: 15
          },
        ])
      }
    } catch (err) {
      console.error(err)
    }
  }
}
