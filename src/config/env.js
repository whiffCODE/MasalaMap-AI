import dotenv from "dotenv";

dotenv.config();

export const env = {

    port: process.env.PORT || 5000,

    nodeEnv: process.env.NODE_ENV,

    mongodbUri: process.env.MONGODB_URI,

    jwtSecret: process.env.JWT_SECRET,

    jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,

    emailUser: process.env.EMAIL_USER,

    emailPassword: process.env.EMAIL_PASSWORD,

    clientUrl: process.env.CLIENT_URL

};