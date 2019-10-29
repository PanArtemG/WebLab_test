function Animal (name) {
    this.name = name
}

Animal.prototype.getName =  function (name) {
        return this.name
};

function Dog (name) {
    Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
    return `Dog ${this.name} is barking`;
};

const dog = new Dog('Aban');
console.log(dog);
console.log(dog.bark());
console.log(dog.getName() === 'Aban');
console.log(dog.bark() === 'Dog Aban is barking');