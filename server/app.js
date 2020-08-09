const express = require('express');
const app = express();
const PORT = 5000;
const mongoose= require('mongoose');
const {MONGOURI} = require('./key');

require('./models/user');

app.use(express.json());
app.use(require('./routes/auth'));
mongoose.connect(MONGOURI,{
    useUnifiedTopology: true,
	useNewUrlParser: true,
	useCreateIndex: true,
});
mongoose.connection.on('connected',()=>{
    console.log("Connected to MongoDB");
})
mongoose.connection.on('error',(err)=>{
    console.log("Errors in Server : ",err);
})

app.listen(PORT,()=>{
    console.log("Server is running on ",PORT," Number");
})