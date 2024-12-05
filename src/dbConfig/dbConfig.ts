import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGODB_URI as string)
        const connection=mongoose.connection

        connection.on('connected',() =>{
            console.log("Database connected")
        })

        connection.on('error',(err)=>{
            console.log("error"+err) 
            process.exit()
        })
    } catch (error) {
        console.log("Something went wrong")
        console.log(error)
    }
}