class Holiday{
    constructor(destination, days){
        this.destination = destination;
        this.days = days;
    }

    info(){
        return `${this.destination} will take ${this.days} days`;
    }
}

class Expedition extends Holiday{
    constructor(gear, destination, days){
        super(destination, days);
        this.gear = gear;
    }

    info(){
        return `${super.info()}, remember to bring your ${this.gear.join(" and your ")} also`;
    }
}

const visitToNepal = new Expedition(["Sun glasses","Umbrella", "Camera"],'Nepal',30);

console.log(visitToNepal.info());

