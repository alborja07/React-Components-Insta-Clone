//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = props => {
  console.log('the props', props.post);
  return (
    <div className="posts-container-wrapper">
      {props.post.map(p => (
        <div className='post-image-wrapper' key={p.imageUrl}>
          <Post
          className='post-image'
          
          post={p}
          />
          </div>
      ))
      }
    </div>
  );
};

export default PostsPage;

