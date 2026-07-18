import dotenv from "dotenv";
import { cleanEnv, str, port } from "envalid";

dotenv.config();

export const env = cleanEnv(process.env, {
    PORT: port({
        default: 5000
    }),

    NODE_ENV: str({
        default: "development"
    }),

    MONGODB_URI: str(),

    JWT_SECRET: str(),

    JWT_REFRESH_SECRET: str(),

    EMAIL_USER: str(),

    EMAIL_PASSWORD: str(),

    CLIENT_URL: str({
        default: "http://localhost:3000"
    })
});