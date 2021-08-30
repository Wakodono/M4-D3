import { Button, ListGroup } from 'react-bootstrap'

const deleteComment = async (asin) => {
    try {
        let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMDkxOTJkNTI2MjAwMTViNmRjZjgiLCJpYXQiOjE2MzAzMjkxOTIsImV4cCI6MTYzMTUzODc5Mn0.ubmjji90jkcOVoc9-yWVC0wwv1dDfZp3pEJPuA802Jg'
            }
        })
        if (response.ok) {
            alert(`Aaaand it's gone!`)
        } else {
            alert('Delete failed!')
        }
    } catch (error) {
        alert('Delete failed')
    }
}

const SingleComment = ({ comment }) => (
    <ListGroup.Item>
        {comment.comment}
        <Button variant="danger" className="ml-2" onClick={() => deleteComment(comment._id)}>-</Button>
    </ListGroup.Item>
)

export default SingleComment