import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class AddComment extends Component {
    state = {
        comment: {
            comment: '',
            rate: 1,
            elementId: null
        }
    }

 componentDidUpdate(prevProps) {
        if (prevProps.asin !== this.props.asin) {
            this.setState({
                comment: {
                    ...this.state.comment,
                    elementId: this.props.asin
                }
            })
        }
    }

sendComment = async (e) => {
    e.preventDefault()
    try {
        let response = await fetch ('https://striveschool-api.herokuapp.com/api/comments', {
            method: 'POST',
            body: JSON.stringify(this.state.comment),
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

    render() {
        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control type="text" placeholder="write your comment here" />
                        value={this.state.comment.comment}
                        onChange={e => this.setState({
                            comment: {
                                ...this.state.comment,
                                comment: e.target.value
                            }
                        })}
                    </Form.Group>
                    <Form.Group >
                        <Form.Label>Rating</Form.Label>
                        <Form.Control as="select" value={this.state.comment.rate} />
                        onChange={e => this.setState({
                            comment: {
                                ...this.state.comment,
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
}
