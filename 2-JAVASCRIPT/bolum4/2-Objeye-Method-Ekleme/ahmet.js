let ogrenci = {
    adSoyad: "Ahmet Ceylan",
    yas: 18,
    email: "kemalcarken@gmail.com",
    sinif: 12,
    login() { console.log("Öğrenci Giriş Yaptı."); },
    logout() { console.log("Öğrenci Çıkış Yaptı."); },
}

ogrenci.login();
console.log("Öğrenci Bir Boklar Yedi...");
ogrenci.logout();

