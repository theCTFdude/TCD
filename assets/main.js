// disable zooming
document.addEventListener('touchmove', function (event) {
  if (event.scale !== 1) { event.preventDefault(); }
}, { passive: false });


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

function Goto_reverse() {
  document.getElementById('reverse').scrollIntoView({
    behavior: 'smooth'
  });
}

function Goto_forensics() {
  document.getElementById('forensics').scrollIntoView({
    behavior: 'smooth'
  });
}
