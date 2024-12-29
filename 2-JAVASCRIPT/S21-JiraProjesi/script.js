const listColumns = document.querySelectorAll('.drag-items-list');
let todoListArray = [];
let progressListArray = [];
let doneListArray = [];
let listArrays = [];
const todoList = document.getElementById('todo-list');
const progressList = document.getElementById('progress-list');
const doneList = document.getElementById('done-list');
const addButtons = document.querySelectorAll('.add-btn:not(.update)');
const saveButtons = document.querySelectorAll('.update');
const textArea = document.querySelectorAll('.add-container');
const addItems = document.querySelectorAll('.add-item');
let isUpdateOnLoad = false;
let draggedItem;
let currentColumn;
let dragging = false;









function getSavedColumns() {
    if (localStorage.getItem('todoItems')) {
        todoListArray = JSON.parse(localStorage.getItem('todoItems'));
        progressListArray = JSON.parse(localStorage.getItem('progressItems'));
        doneListArray = JSON.parse(localStorage.getItem('doneItems'));
    } else {
        todoListArray = ['React Entegrasyonu', "Node.js Entegrasyonu"];
        progressListArray = ['Sendgrid Entegrasyonu'];
        doneListArray = ['Flutter Entegrasyonu'];
    }
}

function updateSavedColumn() {
    listArrays = [todoListArray, progressListArray, doneListArray];
    const arrayNames = ['todo', 'progress', 'done'];
    arrayNames.forEach((arrayName, i) => {
        localStorage.setItem(`${arrayName}Items`, JSON.stringify(listArrays[i]));
    });
}

function createItem(columnItem, column, item, index) {
    const listItem = document.createElement('li');
    listItem.classList.add('drag-item');
    listItem.textContent = item;
    listItem.draggable = true;
    listItem.contentEditable = true;
    listItem.setAttribute('onfocusout', `updateItem(${index},${column})`);
    listItem.setAttribute('ondragstart', 'drag(event)');
    columnItem.appendChild(listItem);
}


function updateItem(i, column) {
    const selectedArray = listArrays[column];
    const selectedColumn = listColumns[column].children;
    if (!dragging) {
        if (!selectedColumn[i].textContent) {
            delete selectedArray[i];
        }
        else {
            selectedArray[i] = selectedColumn[i].textContent;
        }
        updateDOM();

    }
}


function allowDrop(e) {
    e.preventDefault();
}

function updateInsideArrays() {
    todoListArray = [];
    for (let i = 0; i < todoList.children.length; i++) {
        todoListArray.push(todoList.children[i].textContent);
    }

    progressListArray = [];
    for (let i = 0; i < progressList.children.length; i++) {
        progressListArray.push(progressList.children[i].textContent);
    }

    doneListArray = [];
    for (let i = 0; i < doneList.children.length; i++) {
        doneListArray.push(doneList.children[i].textContent);
    }

    updateDOM();
}

function drop(e) {
    e.preventDefault();
    const parent = listColumns[currentColumn];
    listColumns.forEach((column) => {
        column.classList.remove('over');
    });
    parent.appendChild(draggedItem);
    updateInsideArrays();
    dragging = false;
}

function dragEnter(column) {
    // console.log(listColumns[column]);
    listColumns[column].classList.add('over');
    currentColumn = column;
}

function drag(e) {
    draggedItem = e.target;
    dragging = true;
}

function filterArray(array) {
    const filteredArray = array.filter((item) => item !== null);
    return filteredArray;
}

function updateDOM() {
    if (!isUpdateOnLoad) {
        getSavedColumns();
    }
    todoList.textContent = '';
    todoListArray.forEach((todoItem, i) => {
        createItem(todoList, 0, todoItem, i);
    });
    todoListArray = filterArray(todoListArray);

    progressList.textContent = '';
    progressListArray.forEach((progressItem, i) => {
        createItem(progressList, 1, progressItem, i);
    });
    progressListArray = filterArray(progressListArray);

    doneList.textContent = '';
    doneListArray.forEach((doneItem, i) => {
        createItem(doneList, 2, doneItem, i);
    });
    doneListArray = filterArray(doneListArray);

    isUpdateOnLoad = true;
    updateSavedColumn();
}

function showItemDiv(column) {
    addButtons[column].style.visibility = 'hidden';
    textArea[column].style.display = 'flex';
    saveButtons[column].style.display = 'flex';
}


function addToColumn(column) {
    const selectedArray = listArrays[column];
    const itemText = addItems[column].textContent;
    selectedArray.push(itemText);
    addItems[column].textContent = '';
    updateDOM();
}

function hideItemDiv(column) {
    addButtons[column].style.visibility = 'visible';
    textArea[column].style.display = 'none';
    saveButtons[column].style.display = 'none';

    addToColumn(column);
}

updateDOM();