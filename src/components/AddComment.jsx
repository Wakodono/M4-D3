import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const AddComment = () => {
    // state = {
    //     comment: {
    //         comment: '',
    //         rate: 1,
    //         elementId: null
    //     }
    // }
const [comment, setComment] = useState({
    comment: '',
    rate: 1,
    elementId: null
})

//  componentDidUpdate(prevProps) {
//         if (prevProps.asin !== this.props.asin) {
//             this.setState({
//                 comment: {
//                     ...this.state.comment,
//                     elementId: this.props.asin
//                 }
//             })
//         }
//     }

const sendComment = async (e) => {
    e.preventDefault()
    try {
        let response = await fetch ('https://striveschool-api.herokuapp.com/api/comments', {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: {
                'Content-type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMDkxOTJkNTI2MjAwMTViNmRjZjgiLCJpYXQiOjE2MzAzMjkxOTIsImV4cCI6MTYzMTUzODc5Mn0.ubmjji90jkcOVoc9-yWVC0wwv1dDfZp3pEJPuA802Jg' 
            }
        })
        if(response.ok){
            alert('Comment sent')
        } else{
            console.log('error')
            alert('Something went wrong')
        }
    } catch (error) {
        console.log('error')
    }
}

        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control type="text" placeholder="write your comment here" />
                        value={comment.comment}
                        onChange={e => this.setState({
                            comment: {
                                ...comment,
                                comment: e.target.value
                            }
                        })}
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Rating</Form.Label>
                        <Form.Control as="select" value={comment.rate} />
                        onChange={e => this.setState({
                            comment: {
                                ...comment,
                                rate: e.target.value
                            }
                        })}
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Group>
                </Form>
                <Button variant="primary" type="submit">Submit</Button>
            </div>
        )
    
}

export default AddComment