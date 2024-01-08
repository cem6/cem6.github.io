const inputBox = document.getElementById('inputBox');
const listContainer = document.getElementById('listContainer');

// add button
function addTask() {
    if(inputBox.value === '') {
        alert('Please add text');
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = '';

        let span = document.createElement('span');
        span.innerHTML = '\u00D7';
        li.appendChild(span);
    }
    saveData();
}

listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData();
    }else if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();