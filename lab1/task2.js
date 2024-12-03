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