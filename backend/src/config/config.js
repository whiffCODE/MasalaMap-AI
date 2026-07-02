import dotenv from "dotenv";

dotenv.config();

const config = {
    port: process.env.PORT || 5000,

    nodeEnv: process.env.NODE_ENV || "development",

    mongodbUri: process.env.MONGODB_URI,

    jwtSecret: process.env.JWT_SECRET,

    jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,

    clientUrl: process.env.CLIENT_URL,

    geminiApiKey: process.env.GEMINI_API_KEY
};

export default config;