// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.post.comments);
 

  return (
    <div>
      {props.post.map(p =>(
       <CommentInput
         
        key={p.comments}
        post={p}
     
       /> 
      ))}
    </div>
  );
};

export default CommentSection;
