let ogrenci = {
    adSoyad: "Ahmet Ceylan",
    yas: 18,
    email: "kemalcarken@gmail.com",
    sinif: 12,
    dersler:
        [
            { isim: "Matematik", puan: 100 },
            { isim: "Fizik", puan: 44 },
            { isim: "Biyoloji", puan: 85 },
        ],

    login() { console.log("Öğrenci Giriş Yaptı."); },
    logout() { console.log("Öğrenci Çıkış Yaptı."); },
    printLessons() {
        this.dersler.forEach(herbirDers => {
            console.log(herbirDers.isim, herbirDers.puan);
        })
    },
}

ogrenci.printLessons();