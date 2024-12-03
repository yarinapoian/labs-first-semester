let abcd = [4, true, "hello", -0.333333333, false, 666, "$$$??!@", undefined, {name: "Yarina", age: 17}, 3.14, -2000]
object = {}
for (const el of abcd) {
    let elType = typeof el;
    if(elType in object){
        object[elType] = object[elType] + 1;
    } else {
        object[elType] = 1;
    }
}
console.log(object)