import config from "./config/config.js";
import connectDB from "./database/mongodb.js";
import logger from "./utils/logger.js";
import app from "./app.js";

let server;

const start = async () =>
{
    try
    {
        await connectDB();

        server = app.listen(

            config.port,

            () =>
            {

                logger.info(

                    `Server running on port ${config.port}`

                );

            }

        );
    }

    catch (error)
    {
        logger.error(error.message);

        process.exit(1);
    }
};

start();

const gracefulShutdown = signal =>
{

    logger.info(`${signal} received`);

    if (server)
    {

        server.close(() =>
        {

            logger.info("HTTP Server Closed");

            process.exit(0);

        });

    }

};

process.on(

    "SIGINT",

    () => gracefulShutdown("SIGINT")

);

process.on(

    "SIGTERM",

    () => gracefulShutdown("SIGTERM")

);