import app from "./app.js";
import { connectDB } from "./database/mongodb.js";
import { env } from "./config/env.js";

const startServer = async () => {

    await connectDB();

    app.listen(env.PORT, () => {

        console.log(`
====================================
🚀 MasalaMap Backend Started
====================================
PORT : ${env.PORT}
MODE : ${env.NODE_ENV}
====================================
`);

    });

};

startServer();