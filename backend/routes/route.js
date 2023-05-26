const express = require('express')
const router = express.Router();
const products = require('../db/product')
const user = require('../db/user');

// router.post("/products",async (req,res)=>{

//     const data = new products(req.body);
//     const result = await data.save();
//     res.send(result);
//     // console.log(result);
// })
router.get('/product_details/:_id', async (req,res)=>{
    try {
        const productId = req.params._id;
        res.header("Access-Control-Allow-Origin", "*");
        const productDetails = await products.findOne({'_id': productId})
        res.status(200).json(productDetails)
    } catch (error) {
        res.status(401).json({message: error})
    }   
})
router.get('/search/:key', async (req,res)=>{
    try {
        const results = await products.find({
            $or:[
                {brand: {$regex: req.params.key}},
                {category: {$regex: req.params.key}},
                {title: {$regex: req.params.key}},
            ]
        })
        if (results.length > 0) {
            res.send(results);
          } else {
            res.send("No product found");
          }
    } catch (error) {
        res.send("No product found");
    }
})
router.get('/products', async (req,res)=>{
    try {
        const data = await products.find();
        res.header("Access-Control-Allow-Origin", "*");
        if(data?.length >0){
            res.send(data);
        }else{
            res.send("no product found")
            console.log("error found");
        }
    } catch (error) {
        console.log(error);
    }

})
// router.put('/update/:_id', async(req,res)=>{
//     const data = await products.updateOne(req.params, {$set : req.body });
//     res.send(data)
// })

router.get('/search/:key', async(req,res)=>{
    try {
        res.header("Access-Control-Allow-Origin", "*");
        let searchResult = await products.find({
            "$or" :[
               { "category" : {$regex : req.params.key}},
               { "title" : {$regex : req.params.key}},
               { "brand" : {$regex : req.params.key}},
            ]
        })
        
        if (searchResult.length > 0) {
            res.send(result);
          } else {
            res.send("No product found");
          }
    } catch (error) {
        
    }

})
// router.post('/register', async (req,res)=>{
//     console.log(req.body);
//     // try {
//     //     console.log(req.body);
//     //     const userData = new user(req.body);
//     //      const result = await userData.save();
//     //      res.send(result)
//     // } catch (error) {
//     //     console.log("error", error);
//     //     res.send(error)
//     // }
// })

// router.get('/login', async (req,res)=>{

//     // const data = await user(req.body);
//     console.log(req.body);
// })
module.exports = router;