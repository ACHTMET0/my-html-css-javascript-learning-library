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

class Admin extends User {
    deleteUser(userArrived) {
        users = users.filter(newuser => newuser.username !== userArrived.username)
    }

}

const userOne = new User('ahmetbaba', 'kemalcarken@gmail.com');
const userTwo = new User('babaannem', 'achtmet13@gmail.com');
const userThree = new Admin('adminimiz', 'admin@gmail.com');

let users = [userOne, userTwo, userThree];
userThree.deleteUser(userOne);
console.log(users);


// console.log(userOne, userTwo, userThree);
