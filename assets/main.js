// Scroll to top btn
var mybutton = document.getElementById("BackBtn");

window.onscroll = function() {
  scrollFunction();
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


//Go to
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


// crypto donation Addresses
const btc = "bc1qmmezdx0jcywce7cl3x83cs7am8ggps5eemg2q2";
const eth = "0x86d828508DB92E0e4a27533337542789FbD44472";
const link = "0x86d828508DB92E0e4a27533337542789FbD44472";
const ltc = "LbvfMk1dsGQtxXqeNsE21u99U9129JfReW";
const usdt = "0x86d828508DB92E0e4a27533337542789FbD44472";
const ada = "addr1qx52xtdx3vfqzhr9wc38uwv55wyn98yv83mz0x65e3wh3sdg5vk6dzcjq9wx2a3z0cuefgufx2wgc0rky7d4fnza0rqse07wx3";