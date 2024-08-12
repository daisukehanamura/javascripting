// setTimeout を使う際は、実行したい関数をそのまま渡すようにしましょう。関数に () をつけると、その関数がすぐに実行されてしまうので注意が必要です。
/*
const printStringFunc = () => {return "callback function is executed!";};
setTimeout(console.log(printStringFunc),1000);
*/

/*
setTimeout(() => {
    console.log("callback function is executed!");
    // console.timeEnd("setTimeout");
  }, 1000);
*/

const printStringFunc = () => {
    console.log("callback function is executed!");
    // console.timeEnd("setTimeout");
};

setTimeout(printStringFunc, 1000);

const printStringFunc2 = (arg) => {
    console.log(`引数は: ${arg}`);
};

// 引数は別で渡すんだ
setTimeout(printStringFunc2, 1000, "Hello, world!");