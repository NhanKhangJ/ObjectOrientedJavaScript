// //creating obj
// let userOne = {
//    email: 'ryu@ninjas.com',
//    name: 'Ryu',
//    login(){
//        console.log(this.email+"has logged in") //this refer to the object
//    },
//    logout(){
//     console.log(this.email+"has logged out") //this refer to the object
// }
// };

// userOne.name = 'Yoshi'        //dot notation to access properties


// console.log(userOne['email']); //square bracket to access properties

// userOne['email'] = "khang@gmsl.com" //update properties

// //more example
// userOne.age = 25; // create age properties on that user
// userOne.logIngo = function(){
//     //add an function to the object
// }

//classes emulated the ideal of javascript

// class User {
//     constructor(email, name){ //responible for creating new object base on the class
//         this.email = email;
//         this.name = name;
//         this.score = 0;   
//     }
//     login(){ //class methods
//         console.log(this.email, 'just logged in')
//         return this; // return the instance of the object help us to be able to chainning the object
//     }
//     logout(){
//         console.log(this.email, 'just logged out');
//         return this;
//     }
//     updateScore(){
//       this.score +=1;
//       console.log(this.email, 'score is now', this.score);
//       return this;
//     }
// }
// //Class inheritance
// class Admin extends User{
//     deleteUser(user){
//          users = users.filter(u =>{ //allows us filter each element inside the array and filter one of them or more of them out of the array
//              return u.email != user.email
//          })      /*u.email which is the email property of whichever user we are cycling throuth */
//     }
// }
// var userOne = new User('Nhan@afa.com', 'Khang'); 
// var userTwo = new User('Nhan@', 'Nhi'); 
// let admin = new Admin('shaun@ninJas.com', 'shaun');
// var users = [userOne,userTwo,admin]

// admin.deleteUser(userOne);

// console.log(users);
// the 'new' keyword
// create  a new emtpy object
// set the value of 'this to be the new empty object
// calls the constructor method
// var userOne = new User('Nhan@afa.com', 'Khang'); 
// var userTwo = new User('Nhan@afa.com', 'Nhi'); 
// userOne.login();
// userOne.logout();
// console.log(userOne);

//method chainning
// //example
// userOne.updateScore();// 1
// userOne.updateScore();// 2
// userTwo.updateScore();// 1

//return the particular user, and then we can do another method on that user

// userOne.login().updateScore().updateScore().logout();
//out put
// Nhan@afa.com just logged in
// app.js:44 Nhan@afa.com score is now 3
// app.js:44 Nhan@afa.com score is now 4
// app.js:39 Nhan@afa.com just logged out


//constructor function and Protopyte
function User(email,name){
    this.email = email;
    this.name = name;
    this.online= false;
}

//now the function is inside the prototype
User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.loout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');

}

function Admin(...args){ //take all the parameter and turning them into the array
    //this === this inside the user, biding the context of this keyword to that new object and pass to this function
    User.apply(this, args); //take that User constructur to be a formula
    this.role= 'super admin';     
}

// class Admin extends User{
//     constructor(email, name, role){
//         super(email,name){

//         }
//     }
// }

Admin.prototype = Object.create(User.prototype); //iheritate user prototype to the admin prototype

//adding the additional functionality to Admin prototype only
Admin.prototype.deleteUser = function(user){
    users = users.filter(u => {
        return u.email != user.email
    }) 
}

var userOne = new User('Nhan@afa.com', 'Khang'); 
var userTwo = new User('Nhan@', 'Nhi'); 
var admin = new Admin('shaun@ninjas.com',  );
var users = [userOne, userTwo, admin];

// console.log(userOne);
// userTwo.login();
// userOne.logout();

console.log(admin);