import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";

const healthCheck = asyncHandler(
    async (req, res) =>
    {
        return ApiResponse.success(

            res,

            "Server is healthy",

            {

                uptime: process.uptime(),

                environment: process.env.NODE_ENV,

                timestamp: new Date().toISOString()

            }

        );
    }
);

export default {

    healthCheck

};