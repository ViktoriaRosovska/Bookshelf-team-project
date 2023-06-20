 LOCAL_KEY = "user";
class Account {
    
    userStorage = [];

    signIn(id, name, email, password ) {
        const user = {
            userId: id,
            userName: name,
            userEmail: email,
            userPassword: password
        }
        this.userStorage.push(user);
        localStorage.setItem(this.LOCAL_KEY, JSON.stringify(this.userStorage)); 
        
    }
    signOut() {
        const user = JSON.parse(localStorage.getItem(LOCAL_KEY));
        console.log(user);
    }

}

const userAccount = new Account();

const userRef = {
    userName: "Viktoria",
    userEmail: "tori@gmail.com",
    userId: "123",
    userPassword: "134343111"
}
const newuserRef = {
    userName: "Serghiy",
    userEmail: "serg@gmail.com",
    userId: "1343",
    userPassword: "13fgfgfg11"
}


let user = userAccount.signIn(userRef);
user = userAccount.signIn(newuserRef);
let getuser = JSON.parse(JSON.stringify(localStorage.getItem(LOCAL_KEY)));
console.log(getuser);


let newUser = userAccount.signOut();


