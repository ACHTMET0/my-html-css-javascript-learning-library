const sectionum = document.querySelector('section');
console.log(sectionum.children);
console.log(Array.from(sectionum.children));

Array.from(sectionum.children).forEach(herbiri => {
    herbiri.classList.add('section-element');
});

const baslikh2 = document.querySelector('h2');
console.log(baslikh2.parentElement);
console.log(baslikh2.parentElement.parentElement);
console.log(baslikh2.nextElementSibling);
console.log(baslikh2.previousElementSibling)
console.log(baslikh2.nextSibling.parentElement.children);;