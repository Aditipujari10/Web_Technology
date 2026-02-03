//2.singleton object
const user = new Object();
console.log(user);
const user1 = {
 
};//non singleton object

user1.ID = 1234;
user1.name = "Aditi";
user1.email = "aditi@gmail.com";
user1.isLogin = true;
console.log(user1);

const user2 = {
    email : "Ad@gmail.com",
    username : {
        fullName : {
            Fname : "Aditi",
            Lname : "Pujari"
        }
    }
}
console.log(user2);
console.log(user2.username.fullName);
console.log(user2.username.fullName.Fname);