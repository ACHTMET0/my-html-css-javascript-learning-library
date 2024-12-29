const ulSeçici = document.querySelector(".main");

let isimler = ["Ahmet", "Mehmet", "Nenem", "BABABABAANNEN"];

let html = ``;

isimler.forEach(gelenİsimler => {
    html += `<li>${gelenİsimler}</li>`;
});

console.log(html);
ulSeçici.innerHTML = html;


