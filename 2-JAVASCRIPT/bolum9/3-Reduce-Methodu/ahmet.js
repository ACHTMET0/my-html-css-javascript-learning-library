const points = [70, 75, 25, 31, 46, 51, 45];

const result = points.reduce((value, point) => {
    if (point > 50) {
        value++;
    }
    return value;
}, 0);

// console.log(result);

const students = [
    { name: "ahmet", point: 31 },
    { name: "mehmet", point: 49 },
    { name: "ali", point: 65 },
    { name: "memetalierbil", point: 82 },
    { name: "ahmet", point: 46 },
    { name: "mehmet", point: 21 },
    { name: "ali", point: 84 },
    { name: "memetalierbil", point: 91 },
];

const canTotal = students.reduce((value, student) => {
    if (student.name == 'ahmet') {
        value += student.point;
    }
    return value;
}, 0);

console.log(canTotal);