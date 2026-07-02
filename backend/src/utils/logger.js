import fs from "fs";
import path from "path";
import winston from "winston";

const logDirectory = path.join(process.cwd(), "src", "logs");

if (!fs.existsSync(logDirectory))
{
    fs.mkdirSync(logDirectory, { recursive: true });
}

const logger = winston.createLogger({

    level: "info",

    format: winston.format.combine(

        winston.format.timestamp(),

        winston.format.errors({

            stack: true

        }),

        winston.format.printf(info => {

            return `${info.timestamp} ${info.level.toUpperCase()} ${info.message}`;

        })

    ),

    transports: [

        new winston.transports.Console(),

        new winston.transports.File({

            filename: path.join(logDirectory, "error.log"),

            level: "error"

        }),

        new winston.transports.File({

            filename: path.join(logDirectory, "combined.log")

        })

    ]

});

export default logger;