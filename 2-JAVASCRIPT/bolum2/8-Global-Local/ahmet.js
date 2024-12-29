let yas = 29;

if (true) {
    let yas = 60;
    console.log("İçerideki: ", yas);

    if (true) {
        let yas = 50;
        let ad = "Ahmet";     //global olmadan sadece burada geçerli olacak şekilde tanımlıyor
        var soyad = "Ceylan"; //global tanımlıyor
        console.log("İçeridekinin içerisindeki: ", yas, ad, soyad);
    }
}

console.log("Dışarıdaki: ", yas, ad, soyad);

//Kod şu anda hata veriyor çünkü en dıştakı console'da "ad" değişkeni var. let global tanımlamadığı için ad en dıştayken hata veriyor ya onu sil ya da "var" diye değiştir düzelecek babba