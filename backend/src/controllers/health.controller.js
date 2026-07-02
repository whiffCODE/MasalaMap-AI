import ApiResponse from "../utils/ApiResponse.js";

const healthCheck = async(req,res)=>{

    return ApiResponse.success(

        res,

        "Server is healthy",

        {

            uptime:process.uptime(),

            environment:process.env.NODE_ENV

        }

    );

};

export default {

    healthCheck

};