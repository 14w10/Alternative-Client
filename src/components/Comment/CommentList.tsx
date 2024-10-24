// src/components/Comment/CommentList.tsx
import React from 'react';
import CommentItem from './CommentItem';

interface CommentListProps {
  comments: any[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <div className="comment-list">
    <h2>Comments</h2>
    {comments.map((comment) =>
      comment.kind !== 'more' ? (
        <CommentItem key={comment.data.id} comment={comment.data} />
      ) : null
    )}
  </div>
);

export default CommentList;
