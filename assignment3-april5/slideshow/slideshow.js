let image=['slide1.webp','slide2.jpg','slide3.jpg'];
let index=0;
// let slideshow=document.getElementById("slide");
setInterval(function(){
    slide.src=image[index];
    index++;
    if(index==image.length){
        index=0;
    }
},2000)