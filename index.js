function Holiday(destination, days){
    this.days=days;
    this.destination = destination;
}

Holiday.prototype.info = function(){
    console.log(`${this.destination} | ${this.days} days`);
}

var nepal = new Holiday("Nepal", 30);

nepal.info();