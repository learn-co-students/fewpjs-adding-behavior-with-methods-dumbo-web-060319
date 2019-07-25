class Animal {
	constructor(name, sex) {
		this.name = name;
		this.sex = sex;
	}
}

class Cat extends Animal {
  constructor() {
  	super(name, sex);
  }
  speak() {
  	return `${name} says meow!`
  }
}
 
class Dog extends Animal {
  constructor() {
  	super(name, sex);
  }
  speak() {
  	return `${name} says woof!`
  }
}
 
class Bird extends Animal {
  constructor() {
  	super(name, sex);
  }
  speak() {
  	return `${name} says squawk!`
  }
}