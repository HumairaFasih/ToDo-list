const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const date = require(__dirname + "/personal-date-module/date.js")
let genArray = []
let workArr = []

app.set('view engine', 'ejs')

// whatever you serve here, remember to link the "remaining" path in the html/ejs file
app.use(express.static("public"))

//middleware = Any function that is executed between the time a request is sent to server and response sent back
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(3000, (req, res) => {
    console.log("Server started on port 3000 ...")
})

app.get('/', (req, res) => {

    // Uses the view engine set above to render a .ejs file (name of file is whatever you choose ) present inside a views directory (IT SHOULD BE NAMED VIEWS)
    // typeOfDay is the keyword/variable name used in the ejs file to contain the value of currentDay

    // res.render('filename.ejs', object) (key being the keyword you used in ejs file)
    // value is the value of whatever you wanna assign to that variable)

    // console.log(req.body.new_task)
    // why does the above console not work?
    const currentDate = date.getDate()
    res.render('list', {
        Title: currentDate,
        itemArray: genArray,
        route: "/"
    })
})

app.get('/work', (req, res) => {
    res.render('list', {
        Title: "Work",
        itemArray: workArr,
        route: "/work"
    })
})

app.post('/', (req, res) => {

    genArray.push(req.body.new_task)
    res.redirect('/')
}) 

app.post('/work', (req, res) => {

    workArr.push(req.body.new_task) 
    res.redirect('/work')

}) 


