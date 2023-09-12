import mongoose from "mongoose";

async function connectDatabase(){
    await mongoose.connect(
        "mongodb+srv://larissallgomes:senha123@testando09.2p9avdn.mongodb.net/?retryWrites=true&w=majority"
    )
}

export default connectDatabase