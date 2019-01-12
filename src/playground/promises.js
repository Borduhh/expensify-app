const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is my resolved data');
  }, 5000);
});

console.log('Before the promise.')

promise.then((data) => {
  console.log(data);
});

console.log('After the promise.')
