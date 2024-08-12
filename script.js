//These image tags allow for when a user hovers over an image on the home page the image changes
let image1 = document.querySelector("#carImage")

image1.addEventListener("mouseover", function(event) {
  image1.src = "https://www.carlogos.org/img/carbrands-luxury.png"
})
image1.addEventListener('mouseout', function(event) {
  image1.src = "https://researchleap.com/wp-content/uploads/2015/12/5.-luxury-cars-in-china.jpg"
})



let image2 = document.querySelector("#carImage2")

image2.addEventListener("mouseover", function(event) {
  image2.src = "https://www.carlogos.org/img/carbrands-supercar.png"
})
image2.addEventListener('mouseout', function(event) {
  image2.src = "https://i.ytimg.com/vi/eqr_2T9zi28/maxresdefault.jpg"
})


let image3 = document.querySelector("#carImage3")

image3.addEventListener("mouseover", function(event) {
  image3.src = "https://dolcemag.com/wp-content/uploads/2009/11/Ettore-Bugatti-founder-of-Bugatti-Automobiles.jpg"
})
image3.addEventListener('mouseout', function(event) {
  image3.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Ettore_Bugatti_in_1932.jpg/640px-Ettore_Bugatti_in_1932.jpg"
})


let image4 = document.querySelector("#carImage4")

image4.addEventListener("mouseover", function(event) {
  image4.src = "https://www.rolls-roycemotorcars.com/content/dam/rrmc/marketUK/rollsroycemotorcars_com/phantom-series-ii-in-detail/page-properties/01_RR_PHANTOM-single-card-min.jpg/jcr:content/renditions/cq5dam.web.1920.webp"
})
image4.addEventListener('mouseout', function(event) {
  image4.src = "https://miro.medium.com/v2/resize:fit:2400/1*YYke5rGgcAnwE-dko-ZMFQ.jpeg"
})

//This allows for when users click the font change button on the home screen the font changes
let button = document.querySelector(".button")
let ptags = document.querySelectorAll(".change")

button.addEventListener("click", function(event){
for(let i=0;i<ptags.length;i++){
    ptags[i].style.fontFamily = "Script Bold Italics"
  }
})

let heading = document.querySelectorAll(".red")

 headings.addEventListener("click", function(event){
for(let c=0; c<headings.length;c++){
    headings.style.color = "red"
  }})
