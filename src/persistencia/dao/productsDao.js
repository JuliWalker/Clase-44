import {productosSchema} from "../models/ProductosSchema.js";
import {config} from "../configMongoDB.js"
import mongoose from "mongoose";

mongoose.connect(config.mongoDB.URL,config.mongoDB.options)

class ProductsDao {

  constructor(){
      this.collection = mongoose.model('products',productosSchema)
  }

  async findAllProducts() {
    console.log("entre aqui")
    const products = await this.collection.find();
    console.log(products)
    return products;
  }
  async createOneProduct(producto) {
    const productCreated = await this.collection.create(producto);
    return productCreated;
  }
  async deleteOneProduct(id) {
    const productDeleted = await this.collection.findByIdAndDelete(id);
    return productDeleted;
  }
  async updateOneProduct(id, producto) {
    const productUpdated = await this.collection.findByIdAndUpdate(id, producto, {
      new: true, // para que devuelva el producto actualizado
    });
    return productUpdated;
  }

}

export default ProductsDao
