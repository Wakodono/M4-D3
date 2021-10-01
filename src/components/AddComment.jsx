import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const AddComment = () => {
  const [comment, setComment] = useState({
    comment: "",
    rate: 1,
    elementId: null,
  });

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

  useEffect(() => {
    console.log("The book just changed");
  }, []);

  const sendComment = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments",
        {
          method: "POST",
          body: JSON.stringify(comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkMDkxOTJkNTI2MjAwMTViNmRjZjgiLCJpYXQiOjE2MzI5MjMxNjIsImV4cCI6MTYzNDEzMjc2Mn0.ItqFxqg5226SLnw2cQ1lVjz7idZ72eCbXpjTyAwcPB0",
          },
        }
      );
      if (response.ok) {
        alert("Comment sent");
      } else {
        console.log("error");
        alert("Something went wrong");
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div>
      <Form>
        <Form.Group onSubmit={sendComment}>
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="write your comment here"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment, //rate, elementId and comment

                comment: e.target.value, //you are overwritting comment with the value
              })
            }
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                  ...comment,
                  rate: e.target.value,
              })

              // Here you accidentally did above steps inside comment
              // you are creating an object(comment.comment.comment) as the comment (it should be a string) 
              // setComment({
              //   comment: {
              //     ...comment,
              //     rate: e.target.value,
              //   },
              // })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </div>
  );
};

export default AddComment;
