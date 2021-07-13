//the Drone class
class Drone {
	//constructor method for the Drone class
	constructor(id, name) {
		//private id property
		this._id = id;
		//public name property
		this.name = name;
	}
	//behaviors/methods of the Drone class
	fly() {
		console.log('Drone ' + this.id + ' is flying.');
	}

	//getter for the private id property. keep in mind that this isn't actually
	//a function, it's a getter. We don't have to directly call it like a
	//function, it's automatically utilized when we try to reference the
	//private id property later. This is different than in Python, where
	//you have to directly call the get method to access a private property
	get id() {
		return this._id;
	}

	set id(value) {
		this._id = value;
	}

	//static method
	static getCompany() {
		console.log('in getCompany');
	}
}

//instantiates the first object of the Drone class, giving the constructor
//values for the id and name properties
let drone1 = new Drone('A123', 'Flyer');

//instantiates the second object of the Drone class, giving the constructor
//values for the id and name properties
let drone2 = new Drone('B4', 'Twirl');
//changes the value of the private id property
drone2.id = 'B456'

//standard way of referencing object properties, using dot notation
console.log('Drone 1: ' + drone1.id + ' ' + drone1.name);
//alternative way of referencing object properties
console.log('Drone 2: ' + drone2['id'] + ' ' + drone2['name']);

//calls the first Drone object's "fly" method
drone1.fly();

//calls the second Drone object's "fly" method
drone2.fly();

//calls the static "getCompany" method on the Drone class
Drone.getCompany();

//improperly calls the "getCompany" method on a Drone object.
//This will result in an error, because static methods can only be
//called on the class itself, not objects of a class.
drone1.getCompany();

console.log(drone1 instanceof Drone);