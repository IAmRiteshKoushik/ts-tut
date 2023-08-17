class User {

    private _courseCount = 1 

    readonly city: string = "Jaipur";
    constructor(
        public email: string,
        public name: string,
        // private userId: string,
        ){
    }
    private deleteToken(){
        console.log("Token deleted")
    }

    // Getter methods
    get getAppleEmail(): string{
        return `apple${this.email}`;
    }
    get courseCount(): number{
        return this._courseCount;
    }
   
    // Setter methods
    // Setters cannot have return types
    set courseCount(courseNum){
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }
}

const ritesh = new User("ritesh@gmail.com", "Ritesh");

// We cannot access the following as that is a private method and can be used
// only inside the class and can be exposed using getter and setter methods
// ritesh.deleteToken()

export {}