console.log((0 === 1) === false);
console.log((0 === 1) === false);

console.log((10 == "10") === true);
console.log((10 === "10") === false);

// 論理積は最初に出てくる偽値を返す。
console.log((0 && "") === 0);
console.log((1 && "") === "");
console.log((0 && 10) === 0);
console.log((1 && 10) === 10);

// 論理和演算子は左から右に評価され、最初に出てくる真値を返す。
console.log((0 || "") === "");
console.log((1 || "") === 1);
console.log((0 || 10) === 10);
console.log((1 || 10) === 1);