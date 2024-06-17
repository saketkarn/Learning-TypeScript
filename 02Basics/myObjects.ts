const User={
    name:"Saket",
    email:"saket@gmail.com",
    isActive:true
}

// function createUser({name:string, isPaid:boolean}){
// }

// createUser({name:"Saket",isPaid:false})


function createCourse():{name:string,price:number}{
    return {name:"Saket",price:369}
}


//type aliases

type User={
    name:string;
    email:string;
    isActive:boolean
}

function createUser(user:User){}

createUser({name:"Saket",email:"sak@gmail.com",isActive:true})

type newUser={
    readonly _id:string,  //won't be able to change it
    name:string,
    email:string,
    isActive:boolean,
    creditCardDetails?:number  //making it optional
}

let saketUser:newUser={
    _id:"12345",
    name:"Saket",
    email:"saketkarn38@gmail.com",
    isActive:true
}

saketUser.email="s@gmail.com"
// saketUser._id="u5u405"  //won't be able to make the changes

type cardNumber={
    cardNumber:string
}

type cardDate={
    cardDate:string
}

type cardDetails=cardNumber&cardDate &{
    cvv:number
}

export{}