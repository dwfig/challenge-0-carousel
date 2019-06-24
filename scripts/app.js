document.addEventListener("DOMContentLoaded", (e) =>{
  console.log("loaded")
  let carousel = document.querySelector(".image")
  let carouselIndex = 0
  setInterval(() =>{
    console.log("2s");
    carouselIndex++;
    if (carouselIndex > 3){
      carouselIndex = 0
    };
    carousel.style.backgroundImage = `url("./images/hero-image-${carouselIndex}.jpg")`
  },2000)
})
