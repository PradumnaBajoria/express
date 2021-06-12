const express = require("express");
const mainRouter = require('./routes/index')
// const apiKeyMilddleware = require('./middlewares/apiKey')


const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs')
//app.set('views', path.resolve(__dirname) + '/templates')

// console.log(app.get('view engine'))
// console.log(app.get('views'))

// app.use(apiKeyMilddleware)  // this is global middleware used to apply on app

app.use(express.static('public'))

//app.use('/en', mainRouter)  // to use first param as prefix in url
app.use(mainRouter)


app.listen(PORT, () => console.log(`listning on port ${PORT}`));
