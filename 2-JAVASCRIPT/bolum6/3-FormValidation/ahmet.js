const form = document.querySelector('.signupForm');
const alertMessage = document.querySelector('.message');
const usernamePattern = /^[a-z]{6,10}$/;


form.addEventListener('submit', e => {
    e.preventDefault();
    const username = form.username.value;

    if (usernamePattern.test(username)) {
        alertMessage.textContent = 'Başarılı';
    } else {
        alertMessage.textContent = 'Lütfen hepsini küçük harf ve 6 ile 10 karakter arasında olacak şekilde düzenleyiniz.';
    }
});



form.username.addEventListener('keyup', e => {
    //console.log(e.target.value);

    if (usernamePattern.test(e.target.value)) {
        form.username.setAttribute('class', 'success');
        //  console.log('Başarılı');
    } else {
        form.username.setAttribute('class', 'error');
        //  console.log('Başarısız');
    }
});