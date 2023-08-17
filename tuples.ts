// const user: (string | number)[] = [1, "hc"]
let tUser: [string, number, boolean]

tUser = ["hc", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "example@google.com"]

// The values can be changed like this --
// The tuples are mutable in terms of element but
// immutable in terms of size and datatype stored
newUser[1] = "hc.com"
export {}