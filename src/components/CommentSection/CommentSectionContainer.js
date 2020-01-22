// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.commentsOnly);
  
  console.log(props.commentsOnly, "!")
  return (
    <div className='comment-box'>
      {props.commentsOnly.map(p =>(
        <Comment key={p.username} comment={p} />
      ))}
    </div>
  );
};

export default CommentSection;
