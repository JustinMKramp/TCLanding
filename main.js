//*********************Hamburger Controls**************//
const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body')
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
    
    if(header.classList.contains('open')){
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function(element){
            element.classList.remove('fade-in');
            element.classList.add('fade-out');

        });

    }
    else{
        header.classList.add('open');
        fadeElems.forEach(function(element){
            body.classList.add('noscroll');
            element.classList.remove('fade-out');
            element.classList.add('fade-in');

        });

    }
});

//***************Slideshow Controls*******************//
window.onload = function(){
    var slides = document.getElementsByClassName('carousel-item'),
        addActive = function(slide) {slide.classList.add('active')},
        removeActive = function(slide) {slide.classList.remove('active')};
    addActive(slides[0]);
    
    setInterval(function (){
      for (var i = 0; i < slides.length; i++){
        if (i + 1 == slides.length) {
          addActive(slides[0]);
          slides[0].style.zIndex = 100000;
          setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
          break;
        }
        if (slides[i].classList.contains('active')) { 
          slides[i].removeAttribute('style');
          setTimeout(removeActive, 350, slides[i]); //Doesn't be worked in IE-9
          addActive(slides[i + 1]);
          break;
        }
      } 
    }, 4000);
  }
    