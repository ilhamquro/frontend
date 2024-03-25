// Spread syntax digunakan untuk memisahkan array atau object menjadi 1 item (single value)
// notasinya adlah ... (titik tiga)

const fruits = ["Apel", "Anggur"];

const newFruits = [...fruits, "Mangga", "Lemon"];
// const newFruits = [fruits, "Mangga", "Lemon"]; jika tidak menggunakan spread syntax (... fruits) maka outputnya akan
// menjadi array di dalam array
// [ [ 'Apel', 'Anggur' ], 'Mangga', 'Lemon' ]

console.log(newFruits);