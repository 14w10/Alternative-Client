// src/components/Comment/CommentItem.tsx
import React from 'react';
import styles from './CommentItem.module.css';

interface CommentItemProps {
  comment: any;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => (
    <div className={styles['comment-item']}>
    <p>
      <strong>{comment.author}</strong> •{' '}
      {new Date(comment.created_utc * 1000).toLocaleString()}
    </p>
    <div dangerouslySetInnerHTML={{ __html: comment.body_html }} />
    {/* Render replies recursively */}
    {comment.replies &&
      comment.replies.data.children.map((reply: any) =>
        reply.kind !== 'more' ? (
          <CommentItem key={reply.data.id} comment={reply.data} />
        ) : null
      )}
  </div>
);

export default CommentItem;
