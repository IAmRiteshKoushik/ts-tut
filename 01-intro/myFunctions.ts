function addTwo(num: number){
    return num + 2
}

addTwo(5)

function getUpper(val: string){
    return val.toUpperCase();
}


// A good usecase for the function
function signUpUser(name: string, email: string, isPaid: boolean){

}

// Providing default values (in case arguments are not provided)
let loginUser = (name: string, email:string, isPaid: boolean = false) => {
}

getUpper("Hello World");
// signUpUser(1, 2, 3) --> Acceptable in .js not .ts
signUpUser("ritesh", "ritesh@co", false);
loginUser('h', 'h.com')
// The above line does not give and error despite not mentioning
// all parameters as a default value has been provided

export{}