enum LogLevel {
    INFO = "INFO",
    WARNING = "WARNING",
    ERROR = "ERROR"
}

class UnknownLevel extends Error {
    constructor(level: string) {
        super(`Unknown log level: ${level}`);
        this.name = "UnknownLevel";
    }
}

class Logger {
    static logHistory: string[] = [];

    static log(level: LogLevel, message: string): void {
        if (level !== LogLevel.INFO && level !== LogLevel.WARNING && level !== LogLevel.ERROR) {
            throw new UnknownLevel(level);
        } else {
        const logEntry = `[${level}]: ${message}`;
        this.logHistory.push(logEntry);
        console.log(logEntry);
        }
    }

    static history(): void {
        for (let i: number = 0; i < Logger.logHistory.length; i++) {
            console.log(Logger.logHistory[i]);
        }
    }
}