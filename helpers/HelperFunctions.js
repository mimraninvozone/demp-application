exports.successResponse = (res,  data = [], message = 'Success') => {
    return res.status(200).json({success: true, message: message, data: data})
}

exports.errorResponse  = (res, data = [], status = 400, message = 'Something went wrong') => {
    return res.status(status).json({success: false, message: message, data: data});
}
