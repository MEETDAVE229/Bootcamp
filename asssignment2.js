var p = new Promise((resolve, reject) => {
  reject(Error("The Fails!"));
});
p.catch((error) => console.log(error.message));

// output:  The Falis!

//                 ------------

var p = new Promise((resolve, reject) => {
  return Promise.reject(Error("The Fails!"));
});
p.catch((error) => console.log(error.message));

//      output:     error // because of return promise satement

//      ------------

var p = new Promise((resolve, reject) => {
  reject(Error("The Fails!"));
})
  .catch((error) => console.log(error))
  .then((error) => console.log(error));

//     output:  Error: The Fails!
undefined;

//     ------------
Promise.resolve("Success!")
  .then((data) => {
    return data.toUpperCase();
  })
  .then((data) => {
    console.log(data);
  })
  .then(console.log);

// output:     SUCCESS //in uppercase because of data.toUpperCase()
undefined;
//                 ------------

async function f() {
  let result = "first!";
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000);
  });
  result = await promise;
  console.log(result);
}
f();

//  output:    done! //after 1 sec
