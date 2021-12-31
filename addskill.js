function fullName(age,city,country){
    return `${this.firstName} ${this.lastName} is ${age} old from ${city},${country}`
}

let object2 = {
    firstName : "Prathamesh",
    lastName : "Kadam"
}

const responseBind = fullName.bind(object2,23,"Pune","India");
console.log("responseBind = ",responseBind())

Function.prototype.myBind = function(...params){
    const thisUsedAsFn = this;
    const object = params[0];
    const withOutObjArr = params.slice(1);

    //return function(...internalParams){
        return thisUsedAsFn.call(object,...withOutObjArr)
    //}
}

const responseMyBind = fullName.myBind(object2,24,"SOlapur","INd");
console.log("responseMyBind = ",responseMyBind)
