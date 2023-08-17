type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

// This is how you combine types that are previously declared into types 
type cardDetails = cardNumber & cardDate & {
    cvv: number
}

