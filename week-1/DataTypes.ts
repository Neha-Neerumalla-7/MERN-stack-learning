let user_Name:string ="Neha";

let age:number =19;

let isStudent:boolean =true;

console.log("user_Name has the datatype :"+typeof user_Name);
console.log("age has the datatype :"+typeof age);
console.log("isStudent has the datatype :"+typeof isStudent);


function displayDetails(name:string,age:number,active:boolean):void{
    console.log(`Name : ${name}`);
    console.log(`Age : ${age}`);
    console.log(`IsStudent : ${isStudent}`);
}

displayDetails(user_Name,age,isStudent);