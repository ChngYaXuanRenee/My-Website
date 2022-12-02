
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






 