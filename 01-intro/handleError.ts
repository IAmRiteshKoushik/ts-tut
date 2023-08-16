function consoleError(errmsg: string): void{
    console.log(errmsg);
}

// Using the never keyword to explicitly never
// return anything from the function. Refer the .ts docs
// to further understand the use of throw function. 
function handleError(errmsg: string): never{
    throw new Error(errmsg);
}

export {}