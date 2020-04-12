class Kitten {
  constructor (name, color) {
    // this.name = 'Ashwita';
    // this.color = 'red';
    this.name = name;
    this.color = color;
  }

  setName (name) {
    this.name = name
    return this;
  }

  setColor (color) {
    this.color = color;
    return this;
  }

  save () {
    console.log(`Saving ${this.name} with ${this.color} color`);
  }
}

let newKitten = new Kitten('Anish', 'Red').save();
// newKitten.save();
// newKitten
//   .setName('Akshya')
//   .setColor('pinky')
//   .save();
