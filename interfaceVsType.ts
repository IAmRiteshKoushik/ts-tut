// Interfaces are a very loose form of a class

interface User {
    readonly dbId: number,
    email: string,
    userId: number
    googleId?: string

    // Methods inside interface -- you define what it returns
    startTrail: () => string
    // Alternate way of doing it
    // startTrail(): string

    // Methods with args
    getCoupon(couponName: string, value: number): number
}

// Re-opening of interface in typescript
// Types cannot be re-created; only multiple-inheritance
interface User {
    githubToken: string
}

// Extending an interface (inheritance)
interface Admin extends User {
    role: "admin" | "ta" | "learner",
}

const ritesh: Admin = {
    dbId: 12345,
    email: "ritesh@gmail.com",
    userId: 2211,
    githubToken: "github",
    role: "admin",

    // No args
    startTrail: () => {
        return "trail started"
    },
    // With args
    getCoupon: (name: "hitesh", value: 10) => {
        return 10
    }
}


ritesh.email = "notritesh@gmail.com"
// ritesh.dbId = 2345;

export {}