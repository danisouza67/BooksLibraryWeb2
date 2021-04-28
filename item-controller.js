exports.getWorld = function (req, res) {
    res.json({ result: 'Hello Wrold from Controller' });
}

exports.getWorldParams = (req, res) => {
    res.json({
        message: "Books Library", data: [
            req.params.foo,
            req.params.bar
        ]
    });
    // res.send(user.join("\n"))

};

exports.postWorld = (req, res) => {
    res.json({ result: 'Post was sent', data: req.body });
};
