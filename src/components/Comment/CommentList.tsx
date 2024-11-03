import React from 'react';
import { Box, Typography } from '@mui/material';
import CommentItem from './CommentItem';

interface CommentListProps {
  comments: any[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => (
  <Box mt={4}>
    <Typography variant="h5" mb={2}>
      Comments
    </Typography>
    {comments.map((comment) =>
      comment.kind !== 'more' ? (
        <CommentItem key={comment.data.id} comment={comment.data} />
      ) : null
    )}
  </Box>
);

export default CommentList;
