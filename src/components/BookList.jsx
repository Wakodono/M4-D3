import { useState} from 'react'

import SingleBook from './SingleBook'
import CommentArea from './CommentArea'
import {Col, Container, Row, Form} from 'react-bootstrap'


const BookList = () => {
    // state = {
    //     searchQuery: ''
    // }
    const [search, setSearch] = useState({
        searchQuery: ''
        selectedBook: null
    })

        return (
        <Container>
            <Row>
                    <Col md={8}>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Search</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Search here"
                                        value={search.searchQuery}
                                        onChange={e => setSearch({ searchQuery: e.target.value })}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            {
                                this.props.books.filter(b => b.title.toLowerCase().includes(search.searchQuery)).map(b => (
                                    <Col xs = {3} key = {b.asin} >
                                        <SingleBook
                                            book = {b}
                                            selectedBook = {selectedBook}
                                            changeSelectedBook = {asin => setSearch({
                                                selectedBook: asin
                                            })} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                    <Col md = {4}>
                        <CommentArea asin = {search.selectedBook} />
                    </Col>
                </Row>
        </Container>

        )
        
}

export default BookList 