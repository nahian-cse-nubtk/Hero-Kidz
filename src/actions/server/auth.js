import { usersCollection } from "@/lib/dbconnect"
import bcrypt from 'bcryptjs'
export const postUser =async(payload)=>{
    const {email,password,name} = payload

    if(!email || !password) return null

    const isExist = usersCollection.findOne({email})
    if(isExist){
        return null
    }
    const newUser ={
        provider: "credential",
        name,email,
        password: await bcrypt.hash(password,14),
        role: "user"
    }
   const result = await usersCollection.insertOne(newUser)
   if(result.acknowledged){
    return{
        result
    }
   }
}

export const retriveUser=async(payload)=>{
    const {email,password}=payload
    if(!email || !password){
        return null
   }
   const user = await usersCollection.findOne({email})
   if(!user){
    return null
   }
   const isMatched = await bcrypt.compare(password, user.password)
   if(isMatched){
    return user
   }
   else{
    return null
   }
}