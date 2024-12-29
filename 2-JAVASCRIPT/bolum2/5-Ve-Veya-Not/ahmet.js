const şifre = "pat!ronaa";

if (şifre.length >= 12 && şifre.includes("!")) {
    console.log("Güçlü Şifre");
} else if (şifre.length >= 8) {
    console.log("Şifre Yeterli");                     //Ve
} else {
    console.log("Şifre Yetersiz");
}

if (şifre.length >= 12 || şifre.includes("!")) {
    console.log("Güçlü Şifre");
} else if (şifre.length >= 8) {                     //Veya
    console.log("Şifre Yeterli");
} else {
    console.log("Şifre Yetersiz");
}