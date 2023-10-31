const express = require('express');
const cors = require('cors');

require('./db/config');

const User = require('./db/users');
const Product = require('./db/product');

const app = express();

app.use(express.json());
app.use(cors()); // Invoke cors as middleware

app.post("/register", async (req, res) => {
    let user = new User(req.body);
    let result = await user.save();
    result= result.toObject();
    delete result.password
    res.send(result);
});

app.post('/login', async (req, res) => {

    if (req.body.password && req.body.email) {

        let user = await User.findOne(req.body).select("-password");
        if (user) {
            res.send(user)
        } else {
            res.send("result:no user found");
        }
    } else {
        res.send("result:Enter both details");
    }
})



app.post('/add-product',async (req,res)=>{
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
})

app.get('/product',async (req,res)=>{
    let products = await Product.find();
    if(products.length>0){
        res.send(products);
    }else{
        res.send("result:no data found")
    }
})



app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
