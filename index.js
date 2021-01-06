let express = require('express')

let app = express()
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

.use((req, res, next)=>{
    if(1>new Date().getDate()>6 && 9>=new Date().getHours() >=17) {
        next();
    } else {
        res.status(404).render("pages/available")
    }
    
})

.get("/",(req, res)=>{
    res.status(200).render('pages/index')
})

.get("/services", (req, res)=>{
    res.status(200).render('pages/services')
})

.get("/contact", (req, res)=>{
    res.status(200).render('pages/contact')
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

