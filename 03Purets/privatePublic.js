// class newUser{
//     public email:string
//     name:string
//     private readonly city:string="Patna"
//     constructor(email:string, name:string){
//         this.email=email
//         this.name=name
//     }
// }
var newUser = /** @class */ (function () {
    function newUser(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = "Patna";
    }
    newUser.prototype.deleteToken = function () {
        console.log("Token deleted");
    };
    Object.defineProperty(newUser.prototype, "getAppleEmail", {
        get: function () {
            return "apple ".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(newUser.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error("course count must be greater than 1");
            }
            else {
                this.courseCount = courseNum;
            }
        },
        enumerable: false,
        configurable: true
    });
    return newUser;
}());
var karn = new newUser("saket", "sak@sa.com");
// karn.city //currently accessible before declaring the city as private
// karn.city   //after declaring it as private it won't no longer be accessible
// karn.deleteToken() //can't be accessed as it's a private function
