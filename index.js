var name = 'Everest'
var height = 8848;

var output = function(){
    console.log(`MT. ${this.name} is ${this.height} meters long`)
}

let adventureClimbing = {name, height, output};

adventureClimbing.output();