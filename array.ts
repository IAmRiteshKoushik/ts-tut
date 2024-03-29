// This is how you define arrays but the below method ensures that the arrays
// is always empty. For defining an array that can withold contents
// use the second definition of array. 
const superHeros: [] = [] 
const superHeroes: number[] = []
const superVillians: string[] = []

// Alternate way of defining data
const heroPower: Array<number> = []

superVillians.push("spiderman")

// Using types
type User = {
  name: string
  isActive: boolean
}

const allUsers: User[] = []

// This following does not work as the array accepts entries only in in the 
// User datatype. Passing an empty string is not allowed. 
// allUsers.push("");
allUsers.push({name: "", isActive: true});


// An example for ML models - Array of arrays
const MLModels: number[][] = [
  [255, 255, 255],
  []
]

