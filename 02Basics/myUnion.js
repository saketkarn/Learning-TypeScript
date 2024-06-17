//allows us to be in a situation where we're not sure about the type of data which is going to come
//instead of any, we need to use Union
var score = 33;
var Saket = {
    name: "Saket", id: 334
};
Saket = { name: "sak", id: 334 };
function getDbId(id) {
    console.log("DB id is : ".concat(id));
}
getDbId(3);
getDbId("3");
//array
// const data:number[]=[1,2,3,4,"5"]
// const data2:string[]=["1","2","3","4",5]
var mainData = [1, 2, 3, 4, "5", "6"];
var pi = 3.14; //it'd only take the value 3.14 and nothing else
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment="crew" //it won't allow us to store this
