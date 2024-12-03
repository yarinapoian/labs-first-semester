let abcd = [4, true, "hello", -0.333333333, false, 666, "$$$??!@", undefined, {name: "Yarina", age: 17}, 3.14, -2000]
let object  = {number:0, boolean:0, string:0, object:0, undefined:0}
for (const el of abcd){
    if(typeof el == 'number'){
        object.number = object.number + 1;
    } else if(typeof el == 'boolean'){
        object.boolean = object.boolean + 1;
    } else if(typeof el == 'string'){
        object.string = object.string + 1;
    } else if(typeof el == 'object'){
        object.object = object.object + 1;
    } else if(typeof el == 'undefined'){
        object.undefined = object.undefined + 1;
    }
}
console.log(object)