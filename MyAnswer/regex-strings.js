const zipcodes = `
correct zipcode 1234567
correct zipcode 111-2222
incorrect zipcode 12345678
incorrect zipcode 1111-222
`;

const regex = /[^\d-]\d{7}[^\d-]|[^\d-]\d{3}-\d{4}[^\d-]/g;
console.log(zipcodes.match(regex));

const results = zipcodes.match(regex).map((code) => code.trim());
console.log(results);

/*
zipcodeArray = zipcodes.trim().split('\n');

const correctZipcodes = zipcodeArray.filter(zipcode => {

    if (zipcode.startsWith("correct")) {
        zipcode = zipcode.slice(16)
    } else {
        zipcode = zipcode.slice(18)
    }
    const match1 = zipcode.match(/^\d{7}$/);
    const match2 = zipcode.match(/^\d{3}-\d{4}$/);

    if (match1) {
        return match1
    } else if (match2) {
        return match2
    }
}
);

for (i = 0; i < correctZipcodes.length; i++) {
    if (correctZipcodes[i].startsWith("correct")) {
        correctZipcodes[i] = correctZipcodes[i].slice(16)
    } else {
        correctZipcodes[i] = correctZipcodes[i].slice(18)
    }
}

console.log(correctZipcodes);
*/