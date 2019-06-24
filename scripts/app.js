document.addEventListener("DOMContentLoaded", (e) =>{
  console.log("loaded")
  let carouselTop = document.querySelector("#first-image")
  let carouselBot = document.querySelector("#second-image")
  let carouselIndex = 0
  setInterval(() =>{
    console.log("2s");
    carouselIndex++;
    if (carouselIndex > 3){
      carouselIndex = 0
    };
    // carouselBot.style.backgroundImage = `url("./images/hero-image-${carouselIndex}.jpg")`
    // carouselTop.style.opacity = "0"
    carouselTop.style.backgroundImage = `url("./images/hero-image-${carouselIndex}.jpg")`
    // carouselTop.style.opacity = "1"
  },2000)
  // setInterval(()=>{
  //
  // },3000)
})

// two images :
// fade out top image
// change top image
// fade in top image
// change bottom image
// repeat
