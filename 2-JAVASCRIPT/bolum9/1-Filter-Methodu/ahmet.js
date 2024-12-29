const points = [70, 75, 25, 31, 46, 51, 45];

const studentPassed = points.filter(point => {
    return point > 50;
});

// console.log(studentPassed);

const students = [
    { name: "ahmet", passed: true },
    { name: "mehmet", passed: false },
    { name: "ali", passed: true },
    { name: "memetalierbil", passed: false },
];

const passedStudents = students.filter(student => {
    return !student.passed;
});

console.log(passedStudents);