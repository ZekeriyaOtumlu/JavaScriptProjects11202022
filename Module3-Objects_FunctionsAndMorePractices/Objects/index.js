//Objects: Store data in depth-composite / complex data type
//key value pairs

let course = {
    title: "Learn JavaScript",
    lessons: 20,
    mentor: "Zack Otumlu",
    level: 3,
    isFree: true,
    tags: ["javascript", "objects", "Functions", "DataTypes"]
}

console.log(course.mentor) //Zack Otumlu

let castleAirbnb = {
    title: "Live Like a King in my castle",
    rate: 4.95,
    reviews: 1500,
    isRent: true,
    images: ["img/castle.png", "img/house.png"]
}

console.log(castleAirbnb.isRent);
console.log(castleAirbnb.reviews)

// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

let person = {
    name: "Zack Otumlu",
    age: 38,
    country: "USA"
}

function logData() {
    return person.name + " is " + person.age + " years old and lives in " + person.country
}

console.log(logData())