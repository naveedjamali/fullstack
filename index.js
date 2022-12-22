var day= {
    breakfast:'tea and bread',
    lunch:'biryani with dahi',
}

var night = {
    dinner: 'potato curry'
}


var meal = {...day, ...night};

console.log(meal)