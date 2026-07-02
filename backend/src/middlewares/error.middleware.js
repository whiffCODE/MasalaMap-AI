import ApiError from "../utils/ApiError.js";
import logger from "../utils/logger.js";

const errorHandler = (
    err,
    req,
    res,
    next
) =>
{
    let error = err;

    if (!(error instanceof ApiError))
    {
        error = new ApiError(
            error.statusCode || 500,
            error.message || "Internal Server Error",
            error.errors || [],
            error.stack
        );
    }

    logger.error(error.message);

    return res.status(error.statusCode).json({

        success: false,

        message: error.message,

        errors: error.errors,

        ...(process.env.NODE_ENV === "development" && {

            stack: error.stack

        })

    });
};

export default errorHandler;