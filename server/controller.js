const books = require('./db.json');
let globalId = 3;

module.exports = {
    getBooks: (req, res) => {
        res.status(200).send(books);
      },
    deleteBook: (req, res) => {
        let index = books.findIndex((elem) => elem.id === +req.params.id);
        books.splice(index, 1);
        res.status(200).send(books);
    },
    createBook: (req, res) => {
        let {title, rating, imageURL} = req.body;
        let newBook = {
            id: globalId,
            title,
            rating,
            imageURL
        }
        books.push(newBook);
        res.status(200).send(books);
        globalId++;
      },
      updateBook: (req, res) => {
        let {id} = req.params;
        let {type} = req.body;
        let index = books.findIndex((elem) => elem.id === +id);

        if(books[index].rating === 5 && type === 'plus') {
          res.status(400).send('Cannot go above 5 stupid');
        } else if(books[index].rating === 0 && type === 'minus') {
          res.status(400).send('Cannot go below 0 stupid');
        } else if(type === 'plus') {
          books[index].rating++;
          res.status(200).send(books);
        }   else if(type === 'minus') {
            books[index].rating--;
            res.status(200).send(books);
          } 
        }
    }