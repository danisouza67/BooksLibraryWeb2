const Book = require('./models/book'), express = require('express'), router = express.Router()


exports.newBook = (req, res) => {
    res.render('book', { Book: new Book() })
};

//writing on db
exports.createBook = async (req, res, next) => {
    //  res.send(req.body)
    req.book = new Book();
    next()
    const book = newbook.save((err, book) => {
        if (err) {
            res.status(400).json(err);
            // res.render('book', {book: book})
        }

        res.json(book);

    });
    // res.redirect(`/books/${newbook.id}`);

};

//edit page
exports.editBook = async (req, res) => {
    const book = await Book.findById(req.params.id)
    res.render('edit', { book: book })
}


//getting all

exports.getBooks = async (req, res) => {
  const books = await Book.find().sort({ createdAt: 'desc' })
  res.render('index', { books: books })
}
// exports.getBooks = async (req, res) => {
//     const book = await Book.find({}, (err, books) => {
//         if (err) {
//             res.status(400).json(err);
//         }
//         res.json(books);
//     });
// };

//getting book by id
exports.getBookById = async (req, res) => {
    const book = await Book.findOne({ _id: req.params.id })
    if (book == null) res.redirect('/')
    res.render('show', { book: book })
}
    // exports.getBookById = (req, res) => {
    //     Book.findOne({ _id: req.params.id }, (err, book) => {
    //         if (err) {
    //             res.status(400).json(err);
    //         }
    //         res.json(book);
    //     });
    // };

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