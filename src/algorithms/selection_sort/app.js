
/* -------------------- SETTINGS -------------------- */

var speed = 3;  // time between steps multiplikator (default 1)
var amount = 10;  // amount of elements

const red = "rgba(255, 0, 0, 0.6)";
const green = "rgba(0, 255, 0, 0.6)";
const blue = "rgba(0, 0, 255, 0.6)";
const gray = "rgb(211, 211, 211)";


// spped slider
let rangeInputSpeed = document.querySelector(".range-input-speed input");
let rangeValueSpeed = document.querySelector(".range-input-speed .value div");

rangeInputSpeed.addEventListener("input",function(){
    speed = rangeInputSpeed.value;
    rangeValueSpeed.textContent = "speed: "+speed;  // change value
});

// amount slider
let rangeInputAmount = document.querySelector(".range-input-amount input");
let rangeValueAmount = document.querySelector(".range-input-amount .value div");

rangeInputAmount.addEventListener("input",function(){
    amount = rangeInputAmount.value;
    rangeValueAmount.textContent = "amount: "+amount;   // change value
});


// popup
function popup (text) {
    var popup = document.getElementById('show');
    var closeButton = document.getElementById('closeButton');

    var div = document.getElementById('popupText');
    div.appendChild(document.createElement('p').appendChild(document.createTextNode(text)));

    popup.classList.add('show-popup');

    closeButton.onclick = function(){
    popup.classList.remove('show-popup');
}
}


/* -------------------------------------------------- */







/* -------------------- SETUP -------------------- */

var pos = [];
var elements = [];
function createElements(amount) {
    pos = []; // array of n // n[7] returns number of block at position 7 
    for (let i = 0; i <= amount; i++) pos.push(i); // create array of n
    shuffleArray(pos); // shuffle n

    elements = [] // array of (html) elements // elements[7] returns element with number 7 
    for (let i = 0; i <= amount; i++) { // add elements to arraz IN ORDER
        const e = document.createElement('p');  // create element
        elements.push(e);   // push element to array of elements

        e.textContent = i;      // set element text
        e.id = "b"+i;      // set element id
    }

    appendElements(amount); // append elements to div

    console.log('pos: '+pos)  // print elements
    console.log(elements)  // print elements
}

function appendElements(amount) {
    const div = document.querySelector('main');  // destination div
    div.innerHTML = ''; // clear div
    for (let i = 0; i <= amount; i++) { // add elements to div IN ORDER OF POS
        const e = elements[pos[i]];  // get element from map
        div.appendChild(e);     // append element to div
    }
}

function shuffleArray(array) {  // durstenfeld shuffle oder so
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
/* ----------------------------------------------- */








/* -------------------- SORT -------------------- */

async function selection_sort() {
    for (let i = 0; i < pos.length; i++) {
        let min = i;
        elements[pos[i]].style.backgroundColor = blue;              // current smallest
        for (let j = i+1; j < pos.length; j++) {
            elements[pos[j]].style.backgroundColor = red;           // not smaller 
            if (pos[j] < pos[min]) {
                elements[pos[min]].style.backgroundColor = red;     // old smallest
                elements[pos[j]].style.backgroundColor = blue;      // new smallest
                min = j;
            } 
            await timer(300);
        }
        await timer(600);
        swap(i, min);

        elements[pos[i]].style.backgroundColor = green;             // sorted partition
        appendElements(amount); // 'redraw' elements with new order
        resetColors(i, gray);   // set colors from i to end to gray

        await timer(600);
    }
}

function swap(i, j) {
    const temp = pos[i];
    pos[i] = pos[j];
    pos[j] = temp;
}

function resetColors(b, color) {
    for (let i = b+1; i < pos.length; i++) {
        elements[pos[i]].style.backgroundColor = color;
    }
}

const timer = ms => new Promise(res => setTimeout(res, ms / speed))  // Returns a Promise that resolves after Milliseconds
/* ---------------------------------------------- */









/* -------------------- MAIN -------------------- */ 
popup('hallo');






document.querySelector('button').addEventListener('click', () => { 
    
    createElements(amount);  // 9 => 0-9 => 10
    
    selection_sort(pos);
    console.log(pos)
    

    
})



