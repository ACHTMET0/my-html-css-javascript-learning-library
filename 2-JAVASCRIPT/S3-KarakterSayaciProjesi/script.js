const textArea = document.querySelector('textarea');
const totalCounter = document.querySelector('.totalCounter');
const remainingCounter = document.querySelector('.remainingCounter');

var counter;

textArea.addEventListener('keyup', () => {
    totalCounter.textContent = textArea.value.length;
    remainingCounter.textContent = textArea.getAttribute('maxLength') - textArea.value.length;
});


function updateCounter() {
    totalCounter.textContent = textArea.value.length;
    remainingCounter.textContent = textArea.getAttribute('maxLength') - textArea.value.length;
}

updateCounter();