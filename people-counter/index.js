// document.getElementById("count").innerText = 5


let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-El");
function increment(){
    count = count + 1;
    countEl.textContent = count;  
}

function save(){
    let savedCount = count + " - ";
    saveEl.textContent += savedCount;
    countEl.textContent = 0;
    count = 0;
    console.log(count);
}



