// disable zooming
document.addEventListener('touchmove', function (event) {
  if (event.scale !== 1) { event.preventDefault(); }
}, { passive: false });


// alert 
// var close = document.getElementsByClassName("closebtn");
// var i;

// for (i = 0; i < close.length; i++) {

//   close[i].onclick = function(){

//     var div = this.parentElement;
//     div.style.opacity = "0";

//     setTimeout(function() 
//     {
//         div.style.display = "none"; 
//     }, 600);
//   }
// }



// Scroll to top btn
var mybutton = document.getElementById("BackBtn");

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";

  } else {
    mybutton.style.display = "none";

  }
}


function BackBtn() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// Go to
function Goto_general() {
  document.getElementById('general').scrollIntoView({
      behavior: 'smooth'
    });
}

function Goto_web() {
  document.getElementById('web').scrollIntoView({
    behavior: 'smooth'
  });
}

