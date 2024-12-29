class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    login() {
        return console.log(`${this.username} Giriş Yaptı!`)
    }

    logout() {
        return console.log(`${this.username} Çıkış Yaptı!`)
    }
}



const userOne = new User('ahmetbaba', 'kemalcarken@gmail.com');
const userTwo = new User('babaannem', 'achtmet13@gmail.com');
console.log(userOne, userTwo);
userOne.login();
userTwo.logout();