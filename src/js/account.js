// const LOCAL_KEY = "user";
// class Account {

//     signIn(name, email, password ) {
//         const userAccount = {
//             userId: this.getId(),
//             userName: name,
//             userEmail: email,
//             userPassword: password
//         }
//         localStorage.setItem(LOCAL_KEY, JSON.stringify(userAccount));  
//     }

//     signOut() {
//         localStorage.removeItem(LOCAL_KEY);
//     }

//     getId() {
//         return Math.random().toString(16).slice(2);
//     }

//     isAuthentificated() {
//         const auth = localStorage.getItem(LOCAL_KEY);
//         if (auth) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     get user() {
//         const user = JSON.parse(localStorage.getItem(LOCAL_KEY));
//         return {
//             userId: user.userId,
//             userName: user.userName,
//             userEmail: userEmail,
//             userPassword: user.userPassword
//         }
//     }
   
//     signUp(id, name, email, password) {

//     }
    
// }

// const userAccount = new Account();

// const userRef = {
//     userName: "Viktoria",
//     userEmail: "tori@gmail.com",
//     userPassword: "134343111"
// }



// let user = userAccount.signIn(userRef);
// user = userAccount.signOut();

// let auth = userAccount.isAuthentificated();
// console.log(auth)





