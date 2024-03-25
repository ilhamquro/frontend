const numbers = [3, -5, 8, 1, 2, 9, 7, -1, 6];
// filter, map, reduce
// mencari angka > (lebih dari) 3

const filterNumber = numbers.filter((number) => number > 3);
console.log(filterNumber);

const mapNumber = numbers.map((number) => number * 2);
console.log(mapNumber);

const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue);

console.log(sum);