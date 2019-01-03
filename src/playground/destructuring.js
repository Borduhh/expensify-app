//
// Object Destructuring
//

const person = {
  name: 'Nick',
  age: 27,
  location: {
    city: 'Clifton Park',
    temp: 14
  }
};

// Destucturing

const { name, age } = person;

console.log(`${name} is ${age} years old.`);

const { city, temp: temperature } = person.location;

if (city && temperature) {
  console.log(`It's ${temperature} degrees farenheit in ${city}.`)
}

//
// Array Destructuring
//

const address = ['1299 S Juniper St', 'Clifton Park', 'NY', '12065']

const [street, theCity, state = 'PA', zip] = address;

console.log(`You are in ${address[1]}, ${address[2]}`);

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`)