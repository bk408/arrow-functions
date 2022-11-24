// Arrow Function

// let greet = ()=> {
//   console.log('Good Morning');
// }

// function greet() {
//     console.log('Good Morning');
// }

// let sum = (a, b)=>{
//     return a+b;
// };

let sum2 = (a, b) => a + b;

let half = a => a / 2;




// greet();



setTimeout(() => {
    console.log("We are inside setTimeout");
}, 3000);



let greet = () => console.log('Good Morning');

greet();


let obj1 = {
    greeting: "Good Morning",
    names: ["Bhavya", "Aastha", "max", "Smith"],
    speak() {
        this.names.forEach((student) => {
            console.log(this.greeting + " Hello " + student);
        });

    }
}
obj1.speak();


let myfunction = (a, b) => a * b;

let sub = (a, b) => a - b;

let obj2 = {
    Greeting1: "Guten Abend",
    names1: ["Bhavya", "Aastha"],
    speak() {
        this.names1.forEach((students) => {
            console.log(this.Greeting1 + " how are you " + students);
        });
    }
}
obj2.speak();