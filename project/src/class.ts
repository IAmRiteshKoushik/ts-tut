class User {
    // Anything that you do not set as public is be-default public
    public email: string;
    // There is an alternate syntax : #name -- this sets the class attribute to
    // private and while it works in the typescript world, it is preferred to 
    // use the private keyword for better clarity
    private name: string;
    readonly city: string = "Jaipur";

    constructor(email: string, name: string){
        this.email = email;
        this.name = name;
    }
}

const ritesh = new User("ritesh@google.com", "Ritesh");

// You cannot make the following changes as it is READONLY
// ritesh.city = 2
// ritesh.city = "delhi"