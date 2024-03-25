const fruits = ["Apel", "Mangga", "Alpukat", "Anggur"];
const [merah, hijau, kuning, ungu] = fruits;

console.log(ungu);
// destructing di atas merupakan destructing array berdasarkan urutan
// outputnya adalah "Anggur"

const cars = ["Mclaren", "Alphard", "Karimun"];
const [toyota] = cars[0];
const [suzuki] = cars[1];
const [honda] = cars[2];

console.log(suzuki);