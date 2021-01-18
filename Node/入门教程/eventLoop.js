// const s = new Date().getSeconds();

// //setTimeout 并不会在计时器到期之后直接执行
// setTimeout(() => {
//     console.log('run after' + (new Date().getSeconds() - s) + 'seconds');
// },500);

// while(true) {
//     if(new Date().getSeconds() - s >= 4) {
//         console.log('yep,looped 4 seconds');
//         break;
//     }
// }

(function() {
    console.log('This is the start.');
    setTimeout(() => console.log('This is the first message.'));
    console.log('Hello, guys.');
    setTimeout(() => console.log('This is the second message.'));
    console.log('This is the end.');
})();