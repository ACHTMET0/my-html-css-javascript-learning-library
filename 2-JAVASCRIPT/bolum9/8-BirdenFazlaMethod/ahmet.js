const students = [
    { name: "ahmet", point: 31 },
    { name: "mehmet", point: 49 },
    { name: "ali", point: 65 },
    { name: "memetalierbil", point: 100 },
    { name: "nene", point: 72 },
    { name: "hatun", point: 8 },
];


// const filtered = students.filter(student => student.point < 50);

// const plusPoint = filtered.map(student => {
//     return `${student.name} adlı öğrencinin yeni notu: ${student.point + 10}`;
// });

// console.log(plusPoint);


const newNotes = students.filter(student => student.point < 50).map(student => `${student.name} adlı öğrencinin yeni notu: ${student.point + 10}`);
console.log(newNotes);