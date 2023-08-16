type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;

    // Optional arguments
    credcardDetails ? : number;
}

let myUser: User = {
    _id : "1245",
    name: "h",
    email: "ritesh.com",
    isActive: false
}

myUser.email = "ritesh.com"

// Cannot change the following as it is set to READ-ONLY
// myUser._id = "asa"


export {}