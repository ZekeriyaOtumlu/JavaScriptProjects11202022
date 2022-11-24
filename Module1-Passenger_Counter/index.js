//document.getElementById("count-el").innerText = 5;

let count = 0
let countEl = document.querySelector("#count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count = count + 1
    countEl.innerHTML = count

}

function save() {
    let saveCount = count + " - "
    saveEl.textContent += saveCount; // textContent same like innerHTML or innerText but we want to space between number and "-"
    countEl.innerHTML = 0;
}