const buton = document.querySelector('button');

const ul = document.querySelector('ul');
//ul.remove();

// buton.addEventListener('click', () => {
//     console.log("tıklandı");
// });

const liElemanlari = document.querySelectorAll('li');
liElemanlari.forEach(herBiri => {
    herBiri.addEventListener('click', e => {
        // console.log(e);
        // console.log(e.target);
        // console.log("Li'ye tıklandı");
        // e.target.style.color = 'blue';
    });
});

liElemanlari.forEach(herBiri => {
    herBiri.addEventListener('click', (e) => {
        // e.stopPropagation();
        // e.target.remove();
    });
});

buton.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'LANNN';
    ul.append(li);//SONA EKLER
    //ul.prepend(li);//BAŞA EKLER
});


ul.addEventListener('click', (e) => {

    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});
