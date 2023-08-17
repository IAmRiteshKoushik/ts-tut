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

const ritesh: User = {
    dbId: 12345,
    email: "ritesh@gmail.com",
    userId: 2211,

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