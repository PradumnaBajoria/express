const router = require('express').Router();
const ErrorHandler = require('../errors/ErrorHandler');
let products = require('../productData')


router.get('/products', (req, res) => {
    res.render("products", {
        title: 'My Product page'
    })
})

router.get('/api/products', (req, res) => {
    res.json(products)
})

router.post('/api/products', (req, res, next) => {
    const { name, price } = req.body
    // console.log("hello ", req.body)
    console.log(name, price)
    if(!name || !price) {
        next(ErrorHandler.validationError())
        // throw new Error('All fields are required!!')
        // return res.status(422).json({ error : 'All fields are required' })
    }

    const product = {
        id : new Date().getTime().toString(),
        name,
        price
    }

    products.push(product)
    res.json(product)
})

router.delete('/api/products/:productId', (req, res) => {
    products = products.filter((product) => req.params.productId !== product.id)
    res.json({ status: 'OK' })
})


module.exports = router