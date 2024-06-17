//allows us to be in a situation where we're not sure about the type of data which is going to come
//instead of any, we need to use Union

let score:number|string=33

type User={
    name:string
    id:number
}
type Admin={
    name:string
    id:number
}

let Saket:User|Admin={
    name:"Saket", id:334
}

Saket={name:"sak",id:334}

function getDbId(id:number|string){
    console.log(`DB id is : ${id}`)
}

getDbId(3)
getDbId("3")


//array

// const data:number[]=[1,2,3,4,"5"]
// const data2:string[]=["1","2","3","4",5]

const mainData:(number|string)[]=[1,2,3,4,"5","6"]


let pi:3.14=3.14 //it'd only take the value 3.14 and nothing else

let seatAllotment:"aisle"|"middle"|"window"

seatAllotment="aisle"
// seatAllotment="crew" //it won't allow us to store this