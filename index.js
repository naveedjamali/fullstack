class Holiday{
    constructor(destination, days){
        this.destination = destination;
        this.days = days;
    }

    info(){
        console.log(`${this.destination} will take ${this.days} days`);
    }
}

const nepal = new Holiday('Nepal',30);
nepal.info();