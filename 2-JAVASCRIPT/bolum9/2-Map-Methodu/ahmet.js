const points = [70, 75, 25, 31, 46, 51, 45];

const newPoints = points.map(point => {
    return point + 10;
});

// console.log(newPoints);

const students = [
    { name: "ahmet", point: 31 },
    { name: "mehmet", point: 49 },
    { name: "ali", point: 65 },
    { name: "memetalierbil", point: 82 },
];

const newStudentPoints = students.map(student => {
    if (student.point < 50) {
        // return { name: student.name, point: student.point += 10 }
        return student.point += 10;
        return student;
    } else {
        // return student;
        return student.point;

    }

});

console.log(newStudentPoints);