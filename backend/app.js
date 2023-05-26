const express = require('express')
const app = express();
const router = require('./routes/route');
const bodyParser = require('body-parser');
const user = require('./db/user');
const products = require('./db/product')
require('./db/config'); 
const jwt = require('jsonwebtoken');


const cors = require('cors');
app.use(cors());

app.use('/', router)
app.use(express.json());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.post("/products",async (req,res)=>{

    const data = new products(req.body);
    const result = await data.save();
    res.send(result);
    console.log(result);
})
app.post('/register', async (req,res)=>{
    console.log(req.body);
        try {
        console.log(req.body);
        const userData = new user(req.body);
         const result = await userData.save();
         res.send(result)
    } catch (error) {
        console.log("error", error);
        res.send(error)
    }
});
app.post('/login', async (req,res)=>{
    try {
        const username = req.body.username;
        const password = req.body.password;
        let user = {username, password};
        let data =  await user.findOne( { username:username, password: password}); 
        jwt.sign({data}, 'raghuDaksh', {expiresIn: '1000s',}, (err,token)=>{
            res.json({
                token
            })
        })
        if(data){

            return res.status(200).json('login succesfull');

        }else{
            return res.status(401).json('login failed');
        }
    } catch (error) {
        return res.status(500).json('login failed');

    }
})
app.get('/profile', (req,res)=>{
    
})
app.put('/update/:_id', async(req,res)=>{

    const data = await products.updateOne(req.params, {$set : req.body });
    res.send(data)
})
app.listen(5500);
