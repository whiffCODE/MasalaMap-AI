import app from "./app.js";
import { connectDB } from "./database/mongodb.js";
import { env } from "./config/env.js";

const startServer = async () => {

    await connectDB();

    app.listen(env.port, () => {

        console.log(`
====================================
🚀 MasalaMap Backend Started
====================================
PORT : ${env.port}
MODE : ${env.nodeEnv}
====================================
`);

    });

};

startServer();