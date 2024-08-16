// a: 1, b: 8,c: 6
// 他の関数の中で定義した関数を「ネストした関数」と呼びます。「ネストした関数
//  」からは親関数のスコープを参照できます

const a = 1;
const b = 2;
const c = 3;

(function firstFunction() {
    const b = 5;
    const c = 6;

    (function secondFunction() {
        const b = 8;
        console.log(`a: ${a}, b: ${b}, c: ${c}`);
        (function thirdFunction() {
            const a = 7;
            const c = 9;

            (function fourthFunction() {
                const a = 1;
                const c = 8;
            })();
        })();
    })();
})();

