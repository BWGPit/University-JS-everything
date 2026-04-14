enum OvenMode {
    Off, Static, Fan, Grill
}

class InvalidOvenOperationError extends Error {
    public ctx: string
    constructor(ctx: string, msg: string) {
        super(msg)
        this.ctx = ctx
    }
}

class SmartOven {
    private _serial: string
    private _temperature: number
    private _mode: OvenMode
    private _door_open: boolean
    constructor(serial: string) {
        this._serial = serial
        this._temperature = 0
        this._mode = OvenMode.Off
        this._door_open = false
    }

    get serial(): string {return this._serial}
    get temperature(): number {return this._temperature}
    get mode(): OvenMode {return this._mode}
    get door_open(): boolean {return this._door_open}

    set temperature(t: number) {
        if (this._mode == OvenMode.Off && t != 0) {
            throw new InvalidOvenOperationError("temperature", "Temperature must be 0")
        }
        this._temperature = t
    }

    public setMode(newMode: OvenMode): void {
        if (newMode == OvenMode.Grill && this._door_open) {
            throw new InvalidOvenOperationError("setMode", "Grill can't be set with door open")
        }
        this._mode = newMode
        if (newMode == OvenMode.Off) {
            this._temperature = 0
        }
    }

    public openDoor(): void {
        if (this._temperature > 150) {
            throw new InvalidOvenOperationError("openDoor", "Temperature is too high")
        }
        this._door_open = true
    }

    public closeDoor(): void {
        this._door_open = false
    }
}

function activeOvens(ovens: SmartOven[]): number {
    return ovens.filter((x: SmartOven): boolean => x.mode != OvenMode.Off).length
}

const a = new SmartOven("A1")
const b = new SmartOven("B2")
a.setMode(OvenMode.Static)
b.setMode(OvenMode.Off)
console.log(activeOvens([a, b]))