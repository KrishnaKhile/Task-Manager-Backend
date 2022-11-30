
const mongoose = require("mongoose")
const connectdb = async ()=>{
try {
    const connect = await mongoose.connect('mongodb+srv://g3OryuiOGMRdAbRA:g3OryuiOGMRdAbRA@cluster0.ygtadif.mongodb.net/Task-Manager?retryWrites=true&w=majority'
    );
    console.log(`MongoDB Connected`)
} catch (error) {
    console.log(error);
    process.exit(1);
}
};

module.exports=connectdb