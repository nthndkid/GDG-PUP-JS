// Step 1: Create a car object
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
};

// Step 2: Create a function to describe the car
function getDescription(){
    console.log(
        `This car is a ${car.make} ${car.model} ${car.year}`
    )
}

// Step 3: Call the function and display the result
getDescription();
