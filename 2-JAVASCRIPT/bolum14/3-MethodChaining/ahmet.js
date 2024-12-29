class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    login() {
        console.log(`${this.username} Giriş Yaptı!`);
        return this; //BU OLMADIĞINDA İŞLEMDEN SONRA OBJEYİ TEKRAR DÖNDÜRMEDİĞİ İÇİN ÜST ÜSTE LOGİN VE LOGOUT KULLANILAMIYOR O YÜZDEN EKLENMELİ
    }

    logout() {
        console.log(`${this.username} Çıkış Yaptı!`);
        return this;
    }
}



const userOne = new User('ahmetbaba', 'kemalcarken@gmail.com');
const userTwo = new User('babaannem', 'achtmet13@gmail.com');
// console.log(userOne, userTwo);
// userOne.login();
// userTwo.logout();

userOne.login().logout().logout().login();
