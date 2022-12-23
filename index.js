class Holiday{
    constructor(destination, days){
        this.destination = destination;
        this.days = days;
    }

    info(){
        return `${this.destination} will take ${this.days} days`;
    }
}

class Vacation extends Holiday{
    constructor(time, destination, days){
        super(destination, days);
        this.time = time;
    }

    info(){
        return `${super.info()} in ${this.time} hours`;
    }
}

const nepal = new Vacation(30,'Nepal',30);
console.log(nepal.info());