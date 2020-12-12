import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

function Books() {
  // Setting our component's initial state
  const [books, setBooks] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }
    return (
      <Container fluid>
        <Row>
          <Col size="md">
            <Jumbotron>
              <h1>(REACT) Google Books Searcher</h1>
              <p>Search for your favorite book and save it for later!</p>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md">
            <Jumbotron>
              <h1>Saved Books</h1>
                {books.length ? (
                    <List>
                        {books.map(book => (
                        <ListItem key={book._id}>
                            <Link to={"/books/" + book._id}>
                            <strong>
                                {book.title} by {book.author}
                            </strong>
                            </Link>
                            <DeleteBtn onClick={() => deleteBook(book._id)} />
                        </ListItem>
                        ))}
                    </List>
                ) : (
                <h3>You Haven't Saved Any Books Yet!</h3>
                )}
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }


export default Books;
