//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = props => {
  // console.log('the props', props);
  return (
    <div className="posts-container-wrapper">
      {props.post.map(p => (
        <div className='post-image-wrapper'>
          <Post
          className='post-image'
          key={p.imageUrl}
          post={p}
          />
          </div>
      ))
      }
    </div>
  );
};

export default PostsPage;

