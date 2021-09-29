import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentList = ({ commentsToShow }) => {
  return (
    <ListGroup style={{ color: "black" }}>
      {commentsToShow.map((comment) => (
        <SingleComment comment={comment} key={comment._id} />
      ))}
    </ListGroup>
  );
};

export default CommentList;
