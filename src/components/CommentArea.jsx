import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Error from './Error'
import Loading from './Loading'

class CommentArea extends Component {

    state = {
        comments: [], 
        isLoading: false,
        isError: false
    }

    componentDidUpdate = async (prevProps) => {

        if (prevProps.asin !== this.props.asin) {
            
            this.setState({
                isLoading: true
            })
            
            try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin, {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMDkxOTJkNTI2MjAwMTViNmRjZjgiLCJpYXQiOjE2MzA0NDAzMDksImV4cCI6MTYzMTY0OTkwOX0.KqulqOdiYC_re6ovkrCEWwsaMDfG-PftJEqT_97HdZ8'
                    }
                })
                console.log(response)
                
                if (response.ok) {
                    let comments = await response.json()
                    this.setState({ comments: comments, isLoading: false, isError: false })
                } else {
                    console.log('error')
                    this.setState({ isLoading: false, isError: true })
                }
            } catch (error) {
                console.log(error)
                this.setState({ isLoading: false, isError: true })
            }
        }
    }

    render() {
        return (
            <div>
                {this.state.isLoading && <Loading />}
                {this.state.isError && <Error />}
                <AddComment asin={this.props.asin} />
                <CommentList commentsToShow={this.state.comments} />
            </div>
        )
    }
}

export default CommentArea