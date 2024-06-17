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

export{}