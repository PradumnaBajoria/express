const router = require('express').Router();
const { Router } = require('express');
const path = require('path')
const apiKeyMilddleware = require('../middlewares/apiKey')

// router.use(apiKeyMilddleware)  // this is router middleware used to apply on all router

router.get('/', (req, res) => {
    res.render('index', {
        title : 'My home page'
    })
})

router.get('/about', (req, res) => {
    res.render("about", {
        title: 'My about page'
    })
})

router.get('/download', (req, res) => {
    res.download(path.resolve(__dirname) + "/../views/about");
})
console.log(path.resolve(__dirname) + "/../views/about")


//this is route middleware used to apply on a single router. if we want to apply
//multiple middleware we must pass it as array in 2nd param

// router.get('/api/products', apiKeyMilddleware, (req, res) => {
//     res.json([
//         {
//             id : '123',
//             name: 'chrome'
//         },
//         {
//             id : '1234',
//             name : 'firefox'
//         }
//     ])
// })

module.exports = router;