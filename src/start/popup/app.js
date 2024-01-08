var popup = document.getElementById('show');
var openButton = document.getElementById('openButton');
var closeButton = document.getElementById('closeButton');

openButton.onclick = function(){
    popup.classList.add('show-popup');
}

closeButton.onclick = function(){
    popup.classList.remove('show-popup');
}