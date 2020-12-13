import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

function Books() {
  const [books, setBooks] = useState([])
  const [searchedTitle, setSearchedTitle] = useState()

  handleFormSubmit = () => {
    // handles form submit
  }

  handleInputChange = () => {
    // handles users searches
  }

  handleDelete = () => {
    // handles user request to delete searched book
  }

  handleSave = () => {
    // handles user request to save book
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
                    <h1>Book Search</h1>
                    <p>Book Title</p>
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="book"
                            placeholder="Search"
                        />
                        <FormBtn
                            onClick={handleFormSubmit}
                        >
                            Submit Book
                        </FormBtn>
                    </form>
                </Jumbotron>
            </Col>
        </Row>
        <Row>
          <Col size="md">
            <Jumbotron>
              <h1>Results</h1>
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
                <h3>We Cant Find Your Book! Try A Different Title?</h3>
                )}
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }


export default Books;
