module.exports = () => {
    return (res, success, response, status = 200) => {
        res.status(status).json({success, response});
    };
};