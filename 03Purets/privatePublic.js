// class newUser{
//     public email:string
//     name:string
//     private readonly city:string="Patna"
//     constructor(email:string, name:string){
//         this.email=email
//         this.name=name
//     }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var childUser = /** @class */ (function (_super) {
    __extends(childUser, _super);
    function childUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    childUser.prototype.changeCourseCount = function () {
        this._courseCount = 4; //able to access the protected member, protected members can be accessed in the class they are extended
    };
    return childUser;
}(newUser));
var karn = new newUser("saket", "sak@sa.com");
// karn.city //currently accessible before declaring the city as private
// karn.city   //after declaring it as private it won't no longer be accessible
// karn.deleteToken() //can't be accessed as it's a private function
