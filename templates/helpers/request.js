module.exports = () => {
    return (res, sucess, response, status = 200) => {
        res.status(status).json({sucess, response});
    };
};