import SingleBook from './SingleBook'
import {Col, Container, Row} from 'react-bootstrap'
const BookList = ({books}) => (
    <Container>
        <Row>
            {
                books.map(b=>(
                    <Col xs={3}>
                        <SingleBook book = {b}/>
                    </Col>
                ))
            }
        </Row>
    </Container>
)

export default BookList 