class Animal {
    constructor (name) {
        this.name = name
    }

    get getName () {
        return this.name
    }
}

class Dog extends Animal  {
    constructor (name) {
        super (name);
        this.dogname = name
    }

    bark (){
        return `Dog ${this.dogname} is barking`
    }
}

let dog = new Dog("Aban");
console.log(dog);
console.log(dog.bark());
console.log(dog.getName() === 'Aban');
console.log(dog.bark() === 'Dog Aban is barking');

