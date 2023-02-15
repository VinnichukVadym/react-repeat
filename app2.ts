interface IShape {
    area: () => number;
    perimeter: () => number
}

interface IGreeting {
    greeting: (name: string) => void;
}

class Rectangle implements IGreeting, IShape {

    constructor(private a: number, private b: number) {
    }

    greeting(msg: string): void {
        console.log(msg);
    }

    area(): number {
        return this.a * this.b;
    }


    perimeter(): number {
        return this.a + this.b;
    }
}


const rectangle = new Rectangle(2,5);

rectangle.greeting('Hello world');
console.log(rectangle.area());
console.log(rectangle.perimeter());