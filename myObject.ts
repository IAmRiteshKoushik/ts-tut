const User = {
    name: "Ritesh",
    email: "riteshkoushik@gmail.com",
    isActive: true
}

// We are trying to pass in objects in the function
function createUser({name: string, isPaid: boolean}){
}

createUser({name: "hitesh", isPaid: false})

// This is how you return objects from functions
// We can prefer to write "object" rather than "{}"

// function createCourse():{}{
//     return {}
// }

// The above syntax is quite general and can be confusing 
// A better way to write the above function would be 
function createCourse():{name: string, price:number}{
    return {name: 'reactjs', price: 399};
}


// BAD BEHAVIOUR AHEAD  
// Both of the createUser statements are doing the same thing but
// one of the is allowed and the other one is not. This is some
// anomalous behaviour in the current .ts version and is yet to
// be corrected. 

let newUser = {name: "Ritesh", isPaid: false, email: "ritesh@gmail.com"}

// createUser(newUser);
// createUser({name: "Ritesh", isPaid: false, email: "ritesh@gmail.com"})

export {}