import { productsCollection } from "@/lib/dbconnect"
import { ObjectId } from "mongodb";

export const getProductsData = async()=>{
    const products = await productsCollection.find({}).toArray();
    return products
}
export const getSingleProductData = async(id)=>{
    const query = {_id: new ObjectId(id)}
    const product  = await productsCollection.findOne(query)
    return product
}