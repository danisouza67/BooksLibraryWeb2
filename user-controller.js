var User = require('./models/user');

//writing on db
exports.createUser = function (req, res) {
    var newuser = new User(req.body);
    newuser.save(function (err, user) {
        if (err) {
            res.status(400).json(err);
        }

        res.json(user);
    });
};

//reading form db
exports.getUsers = function (req, res) {
    User.find({}, function (err, users) {
        if (err) {
            res.status(400).json(err);
        }
        res.json(users);
    });
};

//getting user by id
exports.getUserById = (req, res) => {
    User.findOne({ _id: req.params.id }, (err, users) => {
        if (err) {
            res.status(400).json(err);
        }
        res.json(users);
    });
};

//getting user by username
exports.getUserByUsername = (req, res) => {
    User.find({ "username": req.params.username }, (err, users) => {
        if (err) {
            res.status(400).json(err);
        }
        res.json(users);
    });
};



//updating user
exports.updateUser = (req, res) => {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, users) => {
        if (err) {
            res.status(400).json(err);
        }
        res.status(400).json(err);
    })
}




//deleting user
exports.deleteUser = (req, res) => {
    User.findByIdAndRemove({ _id: req.params.id }, (err, users) => {
        if (err) {
            res.status(400).json(err);
        }
        res.json(users);
    });
};