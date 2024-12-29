const correctAnswers = ['E', 'E', 'E', 'E'];
const form = document.querySelector('.question-form');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 25;
        } else { }
    });

    //console.log(score);
    result.classList.remove('d-none');

    let puan = 0;
    const bastir = setInterval(() => {
        if (puan == score) {
            clearInterval(bastir);
        } else {
            puan++;
        }
        result.querySelector('span').textContent = `${puan}%`;
    }, 10);


});


// setTimeout(() => {
//     console.log('bok ye lan');  // SÜRE BİTTİKTEN SONRA BİR KERE ÇALIŞIR VE DURUR
// }, 2500);

// let i = 0;
// const bastir = setInterval(() => {
//     console.log('bok ye lan');  // VERİLEN SÜRESİ KADAR ZAMAN HER GEÇTİĞİNDE BİR DAHA ÇALIŞIR
//     i++;                        // BİR DEĞİŞKENE TANIMLAMADAN ÇALIŞMIYOR SETINTERVAL METODU
//     if (i == 4) {
//         clearInterval(bastir);  // BU METOD DA BELİRLİ KOŞULA ULAŞTIKTAN SONRA DURMASINI SÖYLÜYOR
//     }
// }, 1000);
