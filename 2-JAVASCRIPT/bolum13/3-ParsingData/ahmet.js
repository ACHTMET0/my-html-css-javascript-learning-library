const variable = [
    { hobby: 'Swimming', person: 'Ahmet' },
    { hobby: 'Playing Card', person: 'Ahmet' },
    { hobby: 'Video Games', person: 'Ahmet' }
];

console.log(variable);
console.log(JSON.stringify(variable));

localStorage.setItem('todos', JSON.stringify(variable));
const storedData = localStorage.getItem('todos');
console.log(JSON.parse(storedData));