// ol = document.querySelector('ol')
// ol.addEventListener('click',theme)

// div = document.querySelector('div');
// div.addEventListener('click',theme1);

// function theme(event){
//     event.target.classList.toggle("theme");
//     event.stopPropagation()
// }

// function theme1(event){
//     console.log("clicked");
//     event.currentTarget.classList.toggle("theme1")
    
// }

// Placing the order — creating a promise
const orderToy = new Promise((resolve, reject) => {
    let toyArrived = true; // Change to false to see what happens if it doesn’t arrive
  
    if (toyArrived) {
      resolve("Toy has arrived! 🎁");
    } else {
      reject("The toy didn’t arrive. 😢");
    }
  });
  
  // Checking if the toy arrived — using the promise
  orderToy
    .then(message => console.log(message))    // If the toy arrives
    .catch(error => console.log(error));     // If the toy doesn’t arrive
  
