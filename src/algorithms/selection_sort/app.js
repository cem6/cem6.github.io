


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
    const div = document.querySelector('div');  // destination div
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



function selection_sort() {
    for (let i = 0; i < pos.length; i++) {
        let min = i;
        for (let j = i+1; j < pos.length; j++) {
            if (pos[j] < pos[min]) {
                min = j;
            }
        }
        swap(i, min);
    }
}

function swap(i, j) {
    const temp = pos[i];
    pos[i] = pos[j];
    pos[j] = temp;
}



// npx parcel index.html

/* -------------------- MAIN -------------------- */ 




createElements(9);  // 9 => 0-9 => 10 


// colors
const red = "rgba(255, 0, 0, 0.6)";
const green = "rgba(0, 255, 0, 0.6)";
const blue = "rgba(0, 0, 255, 0.6)";
// elements[pos[0]].style.backgroundColor = red;   // element at pos 0 is red
// elements[0].style.backgroundColor = "rgba(255, 155, 0, 0.6)";   // element with number 0 is orange

addEventListener('click', () => {
selection_sort(pos);
console.log(pos)

appendElements(10)
})



