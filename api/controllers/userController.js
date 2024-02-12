const bcryptjs = require('bcryptjs');
const User = require('../models/userModel');
const { errorHandler } = require('../utils/error');

exports.test = (req, res) => {
    res.json({
        message: 'Hello to the new  World!',
    });
};

exports.updateUser = async (req, res, next) => {
    if (req.user.id != req.params.id) return next(errorHandler(403, 'You can only update your own account!'));

    try {
        if (req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 10);
        }

        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar,
            }
        }, { new: true });
        console.log(updatedUser);
        updatedUser.password = undefined;
        res.status(200).json(updatedUser);
    } catch (error) {
        next(error);
    }
};