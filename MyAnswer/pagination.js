// range 関数はこのまま使ってください。
function range(start, end) {
    const r = [];
    for (let i = Math.floor(start); i < Math.floor(end); i++) {
        r.push(i + 1);
    }
    return r;
}

function getPageNums(current, total, size) {
    // ここにロジックを書いてください
    // 配列のレンジを返す
    let test = range(0, total);

    // 配列の先頭位置、終了位置を決定する
    if (total > size) {
        if (Math.ceil(current - 1 - (size / 2)) > 0) {
            test = test.slice(Math.ceil(current - 1 - (size / 2)), Math.ceil(current + (size / 2)));
            if (test.length > size) {
                test = test.slice(0, test.length - 1);
            }
        } else {
            test = test.slice(0, Math.ceil(current + (size / 2)));
            if (test.length > size) {
                test = test.slice(1, test.length)
            }
        }
    }
    return test;
}


console.log(getPageNums(1, 5, 5));
console.log(getPageNums(3, 5, 5));
console.log(getPageNums(4, 6, 5));
console.log(getPageNums(3, 8, 6));
console.log(getPageNums(4, 8, 6));
console.log(getPageNums(4, 8, 3));

// » current = 1, total = 5, size = 5
// » return: [1, 2, 3, 4, 5]
// » current = 3, total = 5, size = 5
// » return: [1, 2, 3, 4, 5]
// » current = 4, total = 6, size = 5
// » return: [2, 3, 4, 5, 6]
// » current = 3, total = 8, size = 6
// » return: [1, 2, 3, 4, 5, 6] 
// » current = 4, total = 8, size = 6
// » return: [2, 3, 4, 5, 6, 7]
// » current = 4, total = 8, size = 3
// » return: [3, 4, 5]