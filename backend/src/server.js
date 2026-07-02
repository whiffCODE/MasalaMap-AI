import config from "./config/config.js";
import connectDB from "./database/mongodb.js";
import app from "./app.js";
import logger from "./utils/logger.js";

const startServer = async()=>{

    await connectDB();

    app.listen(

        config.port,

        ()=>{

            logger.info(

                `Server running on port ${config.port}`

            );

        }

    );

};

startServer();