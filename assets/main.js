// disable zooming
document.addEventListener('touchmove', function (event) {
  if (event.scale !== 1) { event.preventDefault(); }
}, { passive: false });


// alert 
var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {

  close[i].onclick = function(){

    var div = this.parentElement;
    div.style.opacity = "0";

    setTimeout(function() 
    {
        div.style.display = "none"; 
    }, 600);
  }
}


// Go to
function Goto() {
  document.getElementById('general').scrollIntoView({
      behavior: 'smooth'
    });
}