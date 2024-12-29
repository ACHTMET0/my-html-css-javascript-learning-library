const icerik = document.querySelector('p');
console.log(icerik.classList);
icerik.classList.add('ahmetbaba');
icerik.classList.remove('icerik');

const pDegeri = document.querySelectorAll('p');

pDegeri.forEach(herbiri => {
    if (herbiri.textContent.includes('success')) {
        herbiri.classList.add('success');
    }
    if (herbiri.textContent.includes('error')) {
        herbiri.classList.add('error');
    }
});