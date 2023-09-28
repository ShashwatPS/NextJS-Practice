import mongoose from 'mongoose'

const connectMongo = async()=>mongoose.connect(process.env.MONOGO_URI!)

export default connectMongo;
