// function times(num) {
//     return function(val){
//         return num*val;
//     }    
// }

// double = times(2)
// triple = times(3)
// console.log(double(5));
// console.log(triple(6));



// mat = [[1,2,3],[4,5,6],[7,8,9]]
// for(const i of mat){
//     result = ''
//     for(const j of i){
//         result = result + ' ' + String(j);
//     }
//     console.log(result);
    
// }


// obj = {
//     'a':{
//         97:'nintyseven'
//     },
//     'b':{
//         98:'nintyeight'
//     }
// }

// for(const key in obj){
//     for(const element in obj[key]){
//         console.log(key,element,obj[key][element]);
        
//     }
// }


// arr=[]
// for(let i=0;i<3;i++){
//     arr.push([])
//     for(let j=0;j<3;j++){
//         arr[i].push(11*((i*3)+j+1))
//     }
// }
// console.log("done without extra var",arr)

var arr = [1,2,3,4,5];

// arr.forEach(function(val){

//     console.log(val);
    
// })

console.log(arr.push(1));
console.log(arr);

 