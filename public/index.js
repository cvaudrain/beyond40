


$(document).ready()
{console.log("Connected to index.js")}

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
              if(review.reviewerName.length==0 || review.reviewText.length==0 || review.score == ""){
                alert("Please complete review form")
                return}
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

        // Ask Question
        const question = { //the review object to be posted
            askName:"",
            askEmail:"",
            question:""
            }
        
        $(".questionInput").change((e)=>{//tracks form input values
            console.log(e.target.value)
            console.log(e.target.id)
            let keyName = e.target.id
            question[keyName] = e.target.value
            console.log(question)
        })

        $("#submit-q").click((e)=>{
            e.preventDefault()
            console.log("SUBMISSION")
            
            let payload = {
                question: question
            }
            const config = {
                'Content-Type': 'application/json',
                'key': '12345'
              }
              console.log(payload)
              if(payload.question.askName.length==0 || payload.question.questionText.length==0){
                alert("Please complete form")
                return}
           axios.post("/api/ask",payload,config)
           .then((res)=>{
               console.log(`data is ${res.data[0]}`)
            // let newRev = res.data
           
            location.reload()
           })
          .catch((err)=>console.log(err))
        
        })

        // Compose Review/Question Section Visibility
        $("#composeButton").click((ev)=>{
            $("#ask-div").slideUp()
            $("#compose-div").slideDown()
        })
        $("#cancelReview").click((ev)=>{
            $("#compose-div").slideUp()
        })

        $("#askButton").click((ev)=>{
            console.log("click")
            $("#compose-div").slideUp()
            $("#ask-div").slideDown()
        })
        $("#cancelQuestion").click((ev)=>{
            $("#ask-div").slideUp()
        })

        // View complete reviews, questions
        $("#toggleCompose").click((ev)=>{
            $("#show-questions").fadeOut()
            $(".no-question").fadeOut()
            $("#show-reviews").fadeIn()
        
            console.log("button toggle compose click")
        })
        $("#toggleQuestion").click((ev)=>{
            
            $("#show-reviews").fadeOut()
            $("#show-questions").fadeIn()
            $(".no-question").fadeIn()
            console.log("button toggle question click")
        })

