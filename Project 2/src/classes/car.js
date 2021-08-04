import {Vehicle} from './vehicle.js'

//Car class that inherits from Vehicle
export class Car extends Vehicle {
	//constructor for the child class
	constructor(licenseNum) {
		//calls the base class constructor, which is required to call in child
		//classes in Javascript, unlike other languages
		super(licenseNum);
		//overrides the value for the property from the base "Vehicle" class.
		//This line must be ran after the "super"; it will result in an error if
		//run before the "super".
		this.gpsEnabled = false;
		console.log('constructing Car');
	}
	//overrides the "start" method from the "Vehicle" base class
	start() {
		//calls the original "start" method from the "Vehicle" base class,
		//and then displays another message from this override method.
		super.start();
		console.log('starting Car');
	}
}