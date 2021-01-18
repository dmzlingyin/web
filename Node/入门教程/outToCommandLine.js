// const x = 'hello';
// const y = '树哥';
// console.count(`x的值为 ${x} x被检查了几次?`)
// console.count(`x的值为 ${x} x被检查了几次?`)
// console.count(`y的值为 ${y} y被检查了几次?`)

// const doSomething = () => console.log('测试');

// const measureDoingSomething = () => {
//     console.time('doSomething()');
//     doSomething();
//     console.timeEnd('doSomething()');
// };
// measureDoingSomething();

const chalk = require('chalk');
console.log(chalk.yellow('hello啊，树哥'));
exports.color = chalk;
