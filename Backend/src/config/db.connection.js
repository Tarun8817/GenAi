const mongoose = require('mongoose')

async function connectToDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('DB connection successfully')
    }
    catch(error){
        console.log('Db connection failed',error.message);
    }
}

module.exports = connectToDB;