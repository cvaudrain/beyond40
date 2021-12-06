// import dependencies
const reviews = require ("../src/reviews") //import starting reviews
// console.log(reviews)

const express = require("express")
const ejs = require("ejs")
const path = require("path")
const app = express()
// configure server, port, static delivery endpoints
const PORT = process.env.PORT || 3000
app.set("view engine","ejs")

app.use(express.urlencoded({extended:true}))
app.use(express.json()) //!IMPORTANT to parse axios POST req
app.use("/public",express.static("public")) //access css stylesheet
// app.use("/public",express.static(path.join(__dirname,"/public")))
// app.use(express.static("public"))
// app.use(express.static(__dirname + "views"))
// app.use(express.static(path.join(__dirname,"public")))
app.listen(PORT,()=>{
    console.log(`Connected to Express server on port: ${PORT}`)
})

// Start Values
let reviewScore = 4.9
let sum = 44
let userReviews = []
let reviewNum = 9
let calcAverage = (arr)=>{
    //accumulator to divide total sum by arr.length. 
   let rating = reviewNum/num 
   console.log(`avg = ${rating}`)
   return rating
}
// reviewScore = calcAverage(userReviews)
let reviewScoreRoundUp = Math.floor(reviewScore+1)

let starIcon = `<i class="fas fa-star"></i>`
let starIconLg = `<i class="fas fa-2x fa-star"></i>`


// POST/GET Requests
app.get("/",(req,res)=>{
    res.render("main",{
        reviewScore:reviewScore,
        reviewNum:reviewNum,
        starIcon:starIcon,
        reviewScoreRoundUp : reviewScoreRoundUp,
        starIconLg: starIconLg,
        reviews:reviews,
       userReviews:userReviews
    },
    )
})

app.post("/api/review",(req,res)=>{
let newReview = req.body.review
userReviews.push(newReview)
reviewNum+=1
sum+= +newReview.score

reviewScore = sum/reviewNum
res.json(userReviews)
})

