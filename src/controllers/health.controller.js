import { successResponse } from "../utils/apiResponse.js";

export const healthCheck = (req, res) => {

    return successResponse(
        res,
        "MasalaMap API Running",
        {
            status: "UP",
            timestamp: new Date().toISOString(),
            environment: process.env.NODE_ENV
        }
    );

};