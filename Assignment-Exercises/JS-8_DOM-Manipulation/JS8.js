// your code starts here
const counter = document.getElementById("counter-text");
const addBtn = document.getElementById("button-add");
const subtractBtn = document.getElementById("button-subtract");
let count = Number(counter.innerText);

addBtn.addEventListener("click", function addCount(){
    count++;
    counter.innerText = count;
});

subtractBtn.addEventListener("click", function subtractCount(){
    if(count > 0){
        count--;
        counter.innerText = count;
    }
});