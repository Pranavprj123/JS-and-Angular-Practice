// function add(...arr){

//     setTimeout(()=>{
//         console.log('delayed for 3 sec');
//         sum = 0
//         console.log(arr);
//         for (const element of arr){
//             sum+=element
//     }
//     console.log(sum);
// },1000*3);

// console.log('done');

    
// }

// add(1,2,3,4,5,6,7);

// Promise = new Promise((resolve,reject)=>{
//     num = prompt('enter value')
//     if(num%2==0)
//     {
//         resolve(`${num}`)
//     }
//     else{
//         reject(`${num}`)
//     }
// })

// Promise
// .then(function(value){
//     console.log(value,' is even');
//     document.write(value,' is even')
    
// }).catch(function(error){
//     console.log(error,' is odd');
//     document.write(error,' is odd');

// })

// Creating a simple promise
// const myPromise = new Promise((resolve, reject) => {
//     let isTaskDone = true; // Change to false to see the reject case
  
//     if (isTaskDone) {
//       resolve("Task completed successfully! ✅");
//     } else {
//       reject("Task failed! ❌");
//     }
//   });
  
//   // Using the promise
//   myPromise
//     .then(result => console.log(result))    // Runs if resolved
//     .catch(error => console.error(error)); // Runs if rejected
  


let global_data;
async function get_data() {
    await fetch("https://fakestoreapi.com/products")
    .then((response) =>{
        return response.json();
    })
    .then((data) => {
        global_data = data;
        console.log('got the data');
        
    })
    console.log('finish');
    console.log('here its me', global_data,'and here is the data');
    
    
    
}

get_data()
console.log('here out side of the function');
