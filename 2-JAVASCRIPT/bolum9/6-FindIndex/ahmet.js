const points = [70, 75, 99, 31, 46, 51, 45];
const arrayIndex = points.findIndex(point => point == 51);
points[arrayIndex] = 3131313131;
// console.log(points);


const students = [
    { name: "ahmet", point: 31 },
    { name: "mehmet", point: 49 },
    { name: "ali", point: 65 },
    { name: "memetalierbil", point: 100 },
];



const objectIndex = students.findIndex(student => student.name == 'memetalierbil');
students[objectIndex].name = 'maloğlu';
console.log(students);