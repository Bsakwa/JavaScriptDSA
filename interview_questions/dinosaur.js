/*
 * This file contains a simple example of a dinosaur class hierarchy.
 * It demonstrates the use of classes and inheritance in JavaScript.
 */


// Base Dinosaur Class
class Dinosaur {
  constructor(name, diet, sound) {
    this.name = name;
    this.diet = diet;
    this.sound = sound;
  }

  walk() {
    return `${this.name} walks.`;
  }

  eat() {
    return `${this.name} eats ${this.diet}.`;
  }

  makeSound() {
    return `${this.name} makes ${this.sound} sound.`;
  }
}

// Specific Dinosaur Classes Extending the Base Class
class TRex extends Dinosaur {
  constructor() {
    super('Tyrannosaurus Rex', 'meat', 'roar');
  }
}

class Bronto extends Dinosaur {
  constructor() {
    super('Brontosaurus', 'plants', 'honk');
  }
}

class Trike extends Dinosaur {
  constructor() {
    super('Triceratops', 'plants', 'growl');
  }
}

// Additional Dinosaurs with Unique Behaviors
class Mosasaurus extends Dinosaur {
  constructor() {
    super('Mosasaurus', 'fish', 'splash');
  }

  swim() {
    return `${this.name} swims.`;
  }
}

class PlasticDino extends Dinosaur {
  constructor() {
    super('Plastic Dinosaur', '', 'squeak');
  }

  squeak() {
    return `${this.name} squeaks.`;
  }
}

// Usage Example
const tRex = new TRex();
const bronto = new Bronto();
const trike = new Trike();
const mosasaurus = new Mosasaurus();
const plasticDino = new PlasticDino();

console.log(tRex.walk()); // Tyrannosaurus Rex walks.
console.log(bronto.eat()); // Brontosaurus eats plants.
console.log(trike.makeSound()); // Triceratops makes growl sound.
console.log(mosasaurus.swim()); // Mosasaurus swims.
console.log(plasticDino.squeak()); // Plastic Dinosaur squeaks.
