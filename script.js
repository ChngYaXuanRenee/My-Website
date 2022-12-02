
function CopyToClipboard (containerid) {
    var btnCopy = document.getElementById( "copy" );
    var main = document.getElementById( "maincontent" );
 
    var textarea = document.createElement("textarea");
    textarea.id = "temp_element";

    textarea.style.height = 0;
  
    document.body.appendChild(textarea);
 
    textarea.value = document.getElementById(containerid).innerText;
  
    var selector = document.querySelector("#temp_element");
    selector.select();
    document.execCommand("copy");

    document.body.removeChild(textarea); 
  
    if ( document.execCommand( "copy" ) ) {
        btnCopy.classList.add( "copied" );
      
        var temp = setInterval( function(){
          btnCopy.classList.remove( "copied" );
          clearInterval(temp);
        }, 600 );
      
    } else {
      console.info( "document.execCommand went wrong…" );
    }
      
  }



  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }
  

  






 