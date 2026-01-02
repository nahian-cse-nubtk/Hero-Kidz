const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

export const dbConnect =(collection)=>{
    return client.db(process.env.DB_NAME).collection(collection)
}

export const productsCollection = dbConnect("products")
export const usersCollection = dbConnect('users')