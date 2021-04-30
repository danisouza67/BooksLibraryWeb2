var Book = require('./models/book');

//writing on db
exports.createBook = (req, res) => {
    console.log(req.body)
    var newbook = new Book(req.body);
    newbook.save((err, book) => {
        if (err) {
            res.status(400).json(err);
        }

        res.json(book);
    });
};

//reading form db
exports.getBooks = (req, res) => {
    Book.find({}, (err, books) => {
        if (err) {
            res.status(400).json(err);
        }
        res.json(books);
    });
};

//getting user by id
exports.getBookById = (req, res) => {
    Book.findOne({ _id: req.params.id }, (err, book) => {
        if (err) {
            res.status(400).json(err);
        }
        res.json(book);
    });
};

//getting user by username
exports.getBookByTitle = (req, res) => {
    Book.find({ "title": req.params.title }, (err, books) => {
        if (err) {
            res.status(400).json(err);
        }
        res.json(books);
    });
};



//updating user
exports.updateBook = (req, res) => {
    Book.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, books) => {
        if (err) {
            res.status(400).json(err);
        }
        res.status(400).json(err);
    })
}




//deleting user
exports.deleteBook = (req, res) => {
    Book.findByIdAndRemove({ _id: req.params.id }, (err, books) => {
        if (err) {
            res.status(400).json(err);
        }
        res.json(books);
    });
};