function inc2(num) {
    num.c += 1;
}
const obj = { c:5 };
inc2(obj);
console.dir(obj);