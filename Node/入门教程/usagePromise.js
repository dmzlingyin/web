// const promise = new Promise(function(resolve,reject) {
//     if() {
//         resolve(vale);
//     } else {
//         reject(error);
//     }
// });

//Promise对象的简单示例
// function timeout(ms) {
//     return new Promise((resolve,reject) => {
//         setTimeout(resolve,ms,'error');
//     });
// }
// timeout(1000).then((value) => {
//     console.log(value);
// })

// function timeout(ms) {
//     return new Promise((resolve,reject) => {
//         setTimeout(resolve,ms,'resolve函数传递出的执行结果');
//     });
// }
// timeout(2000).then((value,error) => {
//     console.log(value,error);
// });

// let promise = new Promise((resolve,reject) => {
//     console.log('Promise');
//     setTimeout(() => console.log('堆栈1'),0);
//     setTimeout(() => console.log('堆栈2'),2000);
//     setTimeout(() => console.log('堆栈3'),1000);
//     resolve();
// });

// promise.then(() => console.log('resolved.'));

// console.log('Hi!');
// console.log('Hi!');
// console.log('Hi!');
// console.log('Hi!');
// console.log('Hi!');
// console.log('Hi!');

// function loadImageAsync(url) {
//     return new Promise(function(resolve,reject) {
//         const image = new Image();

//         image.onload = function() {
//             resolve(image);
//         };

//         image.onerror = function() {
//             reject(new Error('Could not load image at' + url));
//         };

//         image.src = url;
//     });
// }
// loadImageAsync(url).then((image) => {
//     console.log(image);
// })

// const getJSON = function(url) {
//     const promise = new Promise(function(resolve,reject) {
//         const handler = function() {
//             if (this.readyState !== 4) {
//                 return;
//             }
//             if(this.status === 200) {
//                 resolve(this.response);
//             } else {
//                 reject(new Error(this.statusText));
//             }
//         };

//         const client = new XMLHttpRequest();
//         client.open("GET",url);
//         client.onreadystatechange = handler;
//         client.responseType = "json";
//         client.setRequestHeader("Accept","application/json");
//         client.send();
//     });

//     return promise;
// };

// getJSON("/posts.json").then(function(json) {
//     console.log('Contents:' + json);
// },function(error) {
//     console.error('出错了',error);
// })

const p1 = new Promise(function(resolve,reject) {
    setTimeout(() => reject(new Error('fail')),3000);
});

const p2 = new Promise((resolve,reject) => {
    setTimeout(() => resolve(p1),1000);
});

p2.then(result => console.log(result)).catch(error => console.log(error));