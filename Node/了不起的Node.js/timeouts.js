var start = Date.now();

setTimeout(function () {
    console.log(Date.now() - start);
    // for(var i=0;i<1000000000;i++){}

},1000);
console.log("Hello啊，树哥");
setTimeout(function () {
    console.log(Date.now() - start);
},2000);