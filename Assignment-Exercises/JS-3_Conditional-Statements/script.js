
function checkAge() {
    // write your code here 
    const ageInput = document.getElementById('ageInput').value;
    const result = document.getElementById('result');
    const age = Number(ageInput);
    console.log(age);

    if(age <= 12){
        result.innerHTML = `<p>You are a(n): Child</p>`;
    } else if (age <= 19) {
        result.innerHTML = `<p>You are a(n): Teenager</p>`;
    } else if (age >= 20) {
        result.innerHTML = `<p>You are a(n): Adult</p>`;
    } else {
        result.innerHTML = `<p>Invalid age. Please enter a valid nummber</p>`;
    }
}
