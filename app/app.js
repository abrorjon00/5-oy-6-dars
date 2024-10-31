// Massivga iod masalalar
// 1-misol
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9,];
// let res = arr1.concat(arr2)
// console.log(res);


// 2-misol
// function kofisebti(arg) {
//     return arg.map(function(v) {
//        return v * 3
//     })
    
// }
// let arr = [1, 2, 3, 4, 5];
// console.log(kofisebti(arr));


// 3-misol
// let arr = [1, 2, 3, -4, -1, 5, 5];
// let sum = 0
// let res = arr.filter(function(v) {
//     if (v > 0) {
//         return sum += v
//     }
// })
// console.log(sum);


// 4-misol
// let arr = [0, 10, 0, 0, 3, 12];

// for (let i = arr.length - 1; i >= 0; i--) {
//   if (arr[i] === 0) {
//     arr.splice(i, 1); 
//     arr.push(0); 
//   }
// }
// console.log(arr); 

// 6-misol
// let arr = [1, [2, 3], [4, [5, 6]], 7];
// let res = arr.flat(Infinity);
// console.log(res); 
// men yangi metod organdim. BU flat metodi ichma - ich massivlarni, 
// yangi massivga otkazib bir massiv korinishida qilib berar ekan.


// 7-misol
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let res = arr1.concat(arr2)
// console.log(res);


// 8-misol
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let toq = [];
// let juft = [];
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         juft.push(arr[i])
//     } else if (arr[i] % 2 == 1) {
//         toq.push(arr[i])
//     }
// }
// console.log(juft, toq);


// 9-misol
// let arr = [1, 2, 3, 4];
// let res = arr.includes(3);
// console.log(res);

// let arr = [1, 2, 3, 4];
// let res = arr.includes(10);
// console.log(res);


// 10-misol
// let arr = [1, 6, 2, 8, 10, 23, 7];
// let max = Math.max(...arr)
// let min = Math.min(...arr)
// console.log(max, min);



//  Obyektlar bilan ishlash
// 11-misol
// function tartib(obj) {
// let res = Object.keys(obj).sort();
// let sum = {};
//     res.forEach(key => {
//         sum[key] = obj[key];
//     });
//     return sum;
// }


// const obj = { age: 23, name: "alex", isMarriend: false };
// console.log(tartib(obj)); 


// 12-misol
// function object(obj) {
//     return {
//         kalit: Object.keys(obj),
//         qiymat: Object.values(obj)
//     };
// }

// let obj = {
//     name: "Alex",
//     age: 23,
//     isMarriend: false

//  };
// console.log(object(obj)); 


// 13-misol
// function birlashtir(obj1, obj2) {
//     return { ...obj1, ...obj2 };
// }


// let obje1 = {
//     name: "Alex",
//     age: 23,
//     isMarriend: false

//  };
//  let obje2 = {
//     name: "Alex",
//     age: 23,
//     isMarriend: false,
//     about: "yaxshi"
    

//  };
// console.log(birlashtir(obje1, obje2)); 


// 14-misol
// function Yigindisi(obj) {
//     return Object.values(obj).reduce((sum, value) => sum + value, 0);
// }
// let obyekt = { age: 12, name: 32, ahe: 13 };
// console.log(Yigindisi(obyekt5)); 


// 15-misol
// let obj = { a: 1, b: 2, c: 3 }; 
// let key = 'b'; 
// let news = { ...obj };

// delete news[key];

// console.log(news); 


// 22-misol
// function Words(sentence) {
//     return sentence.split(' ').reverse().join(' '); 
// }
// console.log(Words('Hello World')); 

// 23-misol
// function findLongestWord(arg) {
//     return arg.split(' ').reduce(( v, i) => i.length >  v.length ? i : v, '');
// }

// console.log(findLongestWord('salom qalaysiz'));


