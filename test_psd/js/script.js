let count = 0;
function counter(){
    count++;
    document.getElementById("count").innerHTML = count;
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/*_________________________________________________________________________*/

var sl = document.getElementById('slides');
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0; 

function prevSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide-1)%slides.length; 
    if(currentSlide < 0){
        currentSlide = 3;
    }
    slides[currentSlide].className = 'slide first';
}

function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length; 
    slides[currentSlide].className = 'slide first';
}