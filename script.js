var miVariable = 2;

const clickableLink = document.querySelector('.clickable-link');

clickableLink.addEventListener('click', () => {
    window.location.href = 'index.html';
});

    
$(document).ready(function () { 
    $(clickableLink).on( "mouseenter", handlerIn ).on( "mouseleave", handlerOut );
    function handlerIn() {
        $(".si").css(
            "display", "inline-block"
        );
    }

    function handlerOut() {
        $(".si").css(
            "display", "none"
        );
    }
  });

  

