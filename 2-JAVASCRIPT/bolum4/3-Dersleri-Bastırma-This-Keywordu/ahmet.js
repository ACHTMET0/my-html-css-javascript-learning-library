let ogrenci = {
    adSoyad: "Ahmet Ceylan",
    yas: 18,
    email: "kemalcarken@gmail.com",
    sinif: 12,
    dersler: ["Matematik", "Fizik", "Biyoloji", "Kimya", "Geometri"],
    login() { console.log("Öğrenci Giriş Yaptı."); },
    logout() { console.log("Öğrenci Çıkış Yaptı."); },
    printLessons() {
        this.dersler.forEach(herbirDers => { console.log(herbirDers); })
    },
}

ogrenci.printLessons();
