import React from 'react';
import styles from './PostDetails.module.css';



interface PostDetailsProps {
  post: any;
}

const PostDetails: React.FC<PostDetailsProps> = ({ post }) => (
    <div className={styles['post-details']}>
        <h1>{post.title}</h1>
        <p>Posted by {post.author}</p>
        {post.selftext_html ? (
            <div dangerouslySetInnerHTML={{ __html: post.selftext_html }} />
        ) : (
            <p>{post.selftext}</p>
        )}
    </div>
);

export default PostDetails;
