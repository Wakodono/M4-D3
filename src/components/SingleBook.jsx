import { Card } from 'react-bootstrap'

const SingleBook = ({book}) => {
    return (<Card>
    <Card.Img variant="top" src={book.img} fluid />
    <Card.Body>
      <Card.Title style = {{color: 'black'}}>{book.title}</Card.Title>
    </Card.Body>
  </Card>)
}

export default SingleBook