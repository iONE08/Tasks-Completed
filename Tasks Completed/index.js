let count = 0;
let saveEl = document.getElementById('save-el');
//! let countEl = document.getElementById('count-el').innerText;

function increment() {
    count = count + 1;
    document.getElementById('count-el').innerText = count;
}

function save() {
    let countDash = count + ' - ';
    saveEl.textContent += countDash;
    document.getElementById('count-el').innerText = 0;
    count = 0;
}