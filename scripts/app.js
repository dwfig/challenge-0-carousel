document.addEventListener("DOMContentLoaded", (e) =>{
  console.log("loaded")
  let carouselTop = document.querySelector("#first-image")
  let carouselIndex = 0
  setInterval(() =>{
    console.log("2s");
    carouselIndex++;
    if (carouselIndex > 3){
      carouselIndex = 0
    };
    carouselTop.style.backgroundImage = `url("./images/hero-image-${carouselIndex}.jpg")`
  },2000)
})
