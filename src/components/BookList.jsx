import React from 'react'

import SingleBook from './SingleBook'
import {Col, Container, Row, Form} from 'react-bootstrap'


class BookList extends React.Component {
    state = {
        searchQuery: ''
    }
    render () {
        return (
        <Container>
            <Row>
                <Col>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Search</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="" 
                        />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                {
                    this.props.books.map(b=>(
                        <Col xs={3}>
                            <SingleBook book = {b}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>

        )
        }
}

export default BookList 