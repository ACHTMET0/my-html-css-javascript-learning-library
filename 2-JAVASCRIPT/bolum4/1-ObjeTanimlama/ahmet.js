let ogrenci = {
    adSoyad: "Ahmet Ceylan",
    yas: 18,
    email: "kemalcarken@gmail.com",
    sinif: 12,
}

console.log(ogrenci.adSoyad);

ogrenci.adSoyad = "Mehmet Ali Erbil";
console.log(ogrenci.adSoyad);



console.log(ogrenci["sinif"]);

ogrenci["sinif"] = 9;
console.log(ogrenci["sinif"]);
