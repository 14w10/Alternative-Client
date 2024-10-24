// src/components/Post/PostItem.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface PostItemProps {
  post: any;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => (
  <div className="post-item">
    <h2>{post.title}</h2>
    <p>Posted by {post.author}</p>
    <Link to={`/post/${post.id}`}>View Comments</Link>
  </div>
);

export default PostItem;
