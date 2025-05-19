const person = 
{
    name : "rubait",
    age : 29,
    gender : "male",
    occupation : "software engineer",
    hobbies : ["reading", "gaming", "watching movies"],
    address : {
        street : "123 main st",
        city : "new york",
        state : "ny",
        zip : "10001",
    },
    'fav places' : ['bandarban', 'st martin', 'kuakata']
}

console.log(person.age)

places = person['fav places']

console.log(places)

const keyName = 'occupation';
console.log(person[keyName])


// nested
console.log(person.address.street)
person.hobbies[1] = "studying"
console.log(person.hobbies)

//delete
// delete person.age
// console.log(person)

//key values
const keys = Object.keys(person)
const values = Object.values(person)