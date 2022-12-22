let thingsTodo = {
    morning:"Exercise",
    afternoon:'coding',
    evening:'Watch movies',
    night:['Sleep','Dream']
}

let {morning,afternoon} = thingsTodo;

console.log(morning);
console.log(afternoon);
thingsTodo.morning='Singing';
console.log('morning in windows',morning);
console.log('morning in object',thingsTodo.morning);