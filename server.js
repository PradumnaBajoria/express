const express = require("express");
const ErrorHandler = require("./errors/ErrorHandler");
const mainRouter = require('./routes/index')
// const apiKeyMilddleware = require('./middlewares/apiKey')
const productRouter = require('./routes/products')

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs')
//app.set('views', path.resolve(__dirname) + '/templates')

// console.log(app.get('view engine'))
// console.log(app.get('views'))

// app.use(apiKeyMilddleware)  // this is global middleware used to apply on app

app.use(express.static('public'))
app.use(express.json())

// app.use(express.urlencoded({ extended : false }))  // if we are doing normal form submission

//app.use('/en', mainRouter)  // to use first param as prefix in url
app.use(mainRouter)
app.use(productRouter)

app.use((req, res, next) => {
    return res.json({ message: 'page not found' })
})

app.use((err, req, res, next) => {
    if(err instanceof ErrorHandler){
        res.status(err.status).json({
            error: {
                message : err.message,
                status: err.status
            }
        })
    }else{
        res.status(500).json({
            error: {
                message : err.message,
                status: err.status
            }
        })
    }
    console.log('Error : ', err.message)
    
})

app.listen(PORT, () => console.log(`listning on port ${PORT}`));
