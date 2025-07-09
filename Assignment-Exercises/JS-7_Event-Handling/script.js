const changeColor = document.getElementById("colorButton");

changeColor.addEventListener("click", function changeBackground(){
    let symbols = "0123456789ABCDEF";
    let color = "#";
    
    for(let i=0; i<6; i++){
        color = color + symbols[Math.floor(Math.random() * symbols.length)];
    }
    console.log(color)
    document.body.style.backgroundColor = color;
});