class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}

function validateUserName(username){
    if(username.length >= 18){
        throw new ValidationError("Error: This Username Cannot Be Used")
    }
    return "Valid Username"
}

try {
    console.log(validateUserName("MyNameIsTheBestInTheWorld"))
}catch (error){
    console.error(error.message)
}

console.log("All Done")
