


$(document).ready()
{console.log("Connected to index.js")}

console.log(sessionStorage.getItem("dog"))
$("#composeButton").click(()=>{
    console.log("Click Logged compose review")
})

const review = { //the review object to be posted
    reviewerName:"",
    reviewerEmail:"",
    score:"",
    reviewTitle:"",
    reviewText:""
    }

$(".reviewInput").change((e)=>{//tracks form input values
    console.log(e.target.value)
    console.log(e.target.id)
    let keyName = e.target.id
    review[keyName] = e.target.value
    console.log(review)
})

$(".review-star").click((ev)=>{
    //1. assign score value to review object
    let selectedScore = ev.target.id
    review.score = +selectedScore; 
    //2. Handle UI color changes to indicate selected score, handle multiple changes in score selection with removeClass()
    let stars = document.querySelectorAll(".review-star")
    stars.forEach((star,ind)=>{
        if(star.id <= selectedScore){
            $(star).addClass("beyondBlue")
            $(star).removeClass("light")
        } else{
            $(star).addClass("light")
            $(star).removeClass("beyondBlue")
        }
    })
})
    
        $("#submit").click((e)=>{
            e.preventDefault()
            console.log("SUBMISSION")
            // console.log(review)
            let payload = {
                review: review
            }
            const config = {
                'Content-Type': 'application/json',
                'key': '12345'
              }
           axios.post("/api/review",payload,config)
           .then((res)=>{
               console.log(`data is ${res.data[0]}`)
            let newRev = res.data
            console.log(newRev)
            console.log(localStorage)
            location.reload()
           })
          .catch((err)=>console.log(err))
        })




    
    // const reviewObj = {
    //     name: $("#reviewerName"),
    //     email: $("#reviewerEmail"),
    //     reviewTitle:$("#reviewTitle"),
    //     reviewText:$("#reviewText"),
    //     starScore:$("#starScore")
    // }

//     console.log(`1 star score = ${stars[0].id}`)
//     console.log(`2 star score = ${stars[1].id}`)
//     console.log(`3 star score = ${stars[2].id}`)
//     console.log(`4 star score = ${stars[3].id}`)
//     console.log(stars)
// console.log(ev.target.id)
// console.log($("#star-container").contents)

