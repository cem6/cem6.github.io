var popup = document.getElementById('show');
var openButton = document.getElementById('loginButton');
var closeButton = document.getElementById('closeButton');
var toggleSwitch = document.getElementById('toggleSwitch');
var logo = document.getElementById('logo');

openButton.onclick = function(){
    popup.classList.remove('reset-popup');
    popup.classList.remove('remove-popup');
    popup.classList.add('show-popup');
}

closeButton.onclick = function(){
    popup.classList.remove('show-popup');
    popup.classList.add('remove-popup');
    setTimeout(() => { popup.classList.add('reset-popup'); }, 310);
}

toggleSwitch.onclick = function(){
    document.body.style.background = 'url("res/xatar.gif")';
    logo.innerHTML="haha";
    rainbow();
}

function rainbow() {
    const scheme = document.querySelector("div");
const rainbow = [
  "#ff0000",
  "#ffa500",
  "#ffff00",
  "#008000",
  "#0000ff",
  "#4b0082",
  "#ee82ee",
];
var currentColor = 0;
setInterval(() => {
  logo.style.color = `${rainbow[currentColor]}`;
  logo.style.backgroundColor = `${rainbow[currentColor+2]}`;
  logo.style.borderColor = `${rainbow[currentColor]}`;
  currentColor++; 
  if (currentColor == rainbow.length-1) {
  currentColor = 0;
  }
}, 200);
}
