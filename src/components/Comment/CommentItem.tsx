// src/components/Comment/CommentItem.tsx
import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

interface CommentItemProps {
  comment: any;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => (
  <Box ml={2} mt={2}>
    <Paper elevation={1} sx={{ padding: 2 }}>
      <Typography variant="subtitle2" color="textSecondary">
        <strong>{comment.author}</strong> •{' '}
        {new Date(comment.created_utc * 1000).toLocaleString()}
      </Typography>
      <Box
        mt={1}
        dangerouslySetInnerHTML={{ __html: comment.body_html }}
      />
      {/* Render replies recursively */}
      {comment.replies &&
        comment.replies.data.children.map((reply: any) =>
          reply.kind !== 'more' ? (
            <CommentItem key={reply.data.id} comment={reply.data} />
          ) : null
        )}
    </Paper>
  </Box>
);

export default CommentItem;
