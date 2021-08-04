//base vehicle class
export class Vehicle {
	//constructor for the base class, also called a "super constructor"
	constructor(licenseNum) {
		this.licenseNum = licenseNum;
		this.gpsEnabled = true;
	}

	start() {
		console.log('starting Vehicle');
	}
	//static method
	static getCompanyName() {
		console.log('My Company');
	}
}