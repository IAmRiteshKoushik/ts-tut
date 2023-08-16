let greetings: string = "Hello World!";

greetings.toLowerCase();
console.log(greetings);

// number (there is no integer or float in typescript)
// let userId: number = 2334455;

// boolean
let isLoggedIn: boolean = false;

// Using type-inferences all the time is not the best use of .ts
// It is actually overusing .ts and hence can be avoided
// The code would obviously not throw an err

let userId = 334455.3;   //Good enough to be used
userId.toFixed();  

let hero: String;

function getHero(){
    return "thor";
}
hero = getHero();

// People try to use "any"; which takes away the point
// of using .ts in your project. And it can cause buggy code.

// There is an error (to be handled later)
// Handling it for the time being with the following command
export {}