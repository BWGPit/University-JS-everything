// this file is to show how inheritance works in JavaScript using ES6 classes

class veicle {
    private speed;
    private color;
    private brand;
    private model;
    private year;
    private mileage;
    private price;
    private fuelType;
    private transmission;
    private doors;
    private seats;
    private vin;
    private licensePlate;

    constructor(speed: number, color: string, brand: string, model: string, year: number, mileage: number, price: number, fuelType: string, transmission: string, doors: number, seats: number, vin: string, licensePlate: string) {
        this.speed = speed;
        this.color = color;
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.mileage = mileage;
        this.price = price;
        this.fuelType = fuelType
        this.transmission = transmission;
        this.doors = doors;
        this.seats = seats;
        this.vin = vin;
        this.licensePlate = licensePlate;
    }

    public getSpeed(): number {
        return this.speed;
    }   

    public setSpeed(speed: number): void {
        this.speed = speed;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getBrand(): string {
        return this.brand;
    }

    public setBrand(brand: string): void {
        this.brand = brand;
    }

    public getModel(): string {
        return this.model;
    }

    public setModel(model: string): void {
        this.model = model;
    }

    public getYear(): number {
        return this.year;
    }

    public setYear(year: number): void {
        this.year = year;
    }

    public getMileage(): number {
        return this.mileage;
    }

    public setMileage(mileage: number): void {
        this.mileage = mileage;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public getFuelType(): string {
        return this.fuelType;
    }

    public setFuelType(fuelType: string): void {
        this.fuelType = fuelType;
    }

    public getTransmission(): string {
        return this.transmission;
    }

    public setTransmission(transmission: string): void {
        this.transmission = transmission;
    }

    public getDoors(): number {
        return this.doors;
    }

    public setDoors(doors: number): void {
        this.doors = doors;
    }

    public getSeats(): number {
        return this.seats;
    }

    public setSeats(seats: number): void {
        this.seats = seats;
    }

    public getVin(): string {
        return this.vin;
    }

    public setVin(vin: string): void {
        this.vin = vin;
    }

    public getLicensePlate(): string {
        return this.licensePlate;
    }

    public setLicensePlate(licensePlate: string): void {
        this.licensePlate = licensePlate;
    }

}

class Car extends veicle {
    private trunkCapacity: number;
    private isConvertible: boolean;
    private sunroof: boolean;
    private navigationSystem: boolean;
    private parkingSensors: boolean;
    private heatedSeats: boolean;
    private bluetooth: boolean;
    private backupCamera: boolean;
    private cruiseControl: boolean;
    private laneAssist: boolean;
    private blindSpotMonitoring: boolean;
    private appleCarPlay: boolean;
    private androidAuto: boolean;

    constructor(
        speed: number,
        color: string,
        brand: string,
        model: string,
        year: number,
        mileage: number,
        price: number,
        fuelType: string,
        transmission: string,
        doors: number,
        seats: number,
        vin: string,
        licensePlate: string,
        trunkCapacity: number,
        isConvertible: boolean,
        sunroof: boolean,
        navigationSystem: boolean,
        parkingSensors: boolean,
        heatedSeats: boolean,
        bluetooth: boolean,
        backupCamera: boolean,
        cruiseControl: boolean,
        laneAssist: boolean,
        blindSpotMonitoring: boolean,
        appleCarPlay: boolean,
        androidAuto: boolean
    ) {
        super(speed, color, brand, model, year, mileage, price, fuelType, transmission, doors, seats, vin, licensePlate);
        this.trunkCapacity = trunkCapacity;
        this.isConvertible = isConvertible;
        this.sunroof = sunroof;
        this.navigationSystem = navigationSystem;
        this.parkingSensors = parkingSensors;
        this.heatedSeats = heatedSeats;
        this.bluetooth = bluetooth;
        this.backupCamera = backupCamera;
        this.cruiseControl = cruiseControl;
        this.laneAssist = laneAssist;
        this.blindSpotMonitoring = blindSpotMonitoring;
        this.appleCarPlay = appleCarPlay;
        this.androidAuto = androidAuto;
    }
}

const myCar = new Car(120, "red", "Toyota", "Camry", 2020, 15000, 24000, "Gasoline", "Automatic", 4, 5, "1HGCM82633A123456", "ABC123", 15.1, false, true, true, true, true, true, true, true, true, true, true, true);

console.log(`My car is a ${myCar.getColor()} ${myCar.getBrand()} ${myCar.getModel()} with a speed of ${myCar.getSpeed()} km/h.`);