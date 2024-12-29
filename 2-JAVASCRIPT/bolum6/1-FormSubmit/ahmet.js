const form = document.querySelector('.signupForm');
const userName = document.querySelector('#username');

form.addEventListener('submit', e => {
    e.preventDefault();//SUBMIT YAPILDIKTAN SONRA SAYFANIN YENİLENMESİNİ ENGELLER.
    console.log(form.username.value);
    //console.log(userName.value);
    // console.log('Form gönderildi')
});