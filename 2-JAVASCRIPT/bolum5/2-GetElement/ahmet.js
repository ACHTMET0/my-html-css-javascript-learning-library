// const pDegeri = document.querySelector('p');
// console.log(pDegeri.innerText);

//pDegeri.innerText = "ahmet baba kıyıya açıldı";

// const pDegerleriYeni = document.querySelectorAll('p');

// pDegerleriYeni.forEach(eski => {
//     eski.innerText += " - bokyiyen"
// });

const divinIcındekiText = document.querySelector('.icerik');
// console.log(divinIcındekiText.innerHTML);

// divinIcındekiText.innerHTML = '<h2>İçerik may men</h2>';
// console.log(divinIcındekiText.innerHTML);

const ogrenciler = ["ahmet", "mehmet", "memetalierbil"];

ogrenciler.forEach(ogrenci => {
    divinIcındekiText.innerHTML += `<p>${ogrenci}</p>`;
});
