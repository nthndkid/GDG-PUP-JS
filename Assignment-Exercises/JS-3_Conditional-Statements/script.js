const age = document.getElementById('ageInput').value;
const result = document.getElementById('result');
console.log(age);
function checkAge() {
    // write your code here 

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
