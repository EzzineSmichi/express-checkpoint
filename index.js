let express = require('express')

let app = express()
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

.use((req, res, next)=>{
    if(0<new Date().getDay()<6 && 9<=new Date().getHours() <13) {
        next();
    } else {
        res.render("pages/available")
    }
    console.log(new Date().getDay())
    console.log(new Date().getHours())
})

.get("/",(req, res)=>{
    res.render('pages/index')
})

.get("/services", (req, res)=>{
    res.render('pages/services')
})

.get("/contact", (req, res)=>{
    res.render('pages/contact')
})

.listen(8080)
// OBJECTIVE
// In This checkpoint, we are going to create a web application that contain three pages:
// Home page 
// Our Services
// Contact us
// Each page should contain a nav bar link (Home, Our Services, Contact us)
// Feel free to put any content you want 
// The web application is only available in working time (Monday to Friday, from 9 to 17) 
// INSTRUCTIONS
// Use Express to create the server and handle routes
// Create a custom middleware to verify the time of the request 
// The pages should be styled with css
// Optionally you can use any template engine you want

