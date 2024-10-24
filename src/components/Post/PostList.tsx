import React from 'react';
import PostItem from './PostItem';

const PostList: React.FC<{ posts: any[] }> = ({ posts }) => (
  <div>
    {posts.map((post) => (
      <PostItem key={post.data.id} post={post.data} />
    ))}
  </div>
);

export default PostList;
