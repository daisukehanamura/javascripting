const numbers = [...Array(101).keys()].slice(1);

const result = numbers.map(FizzBazz);

function FizzBazz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz"
    } else if (num % 5 === 0) {
        return "Buzz"
    } else {
        return num;
    }
}

const formattedResults = result.flatMap(posts => posts).join('\n');

console.log(formattedResults);