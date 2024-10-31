import React, { useEffect, useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { marked } from 'marked';

interface CommentItemProps {
  comment: any;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    // Convert Markdown to HTML asynchronously
    const convertMarkdown = async () => {
      const convertedHtml = await marked(comment.body);
      setHtmlContent(convertedHtml);
    };

    convertMarkdown();
  }, [comment.body]);

  return (
    <Box ml={2} mt={2}>
      <Paper elevation={1} sx={{ padding: 2 }}>
        <Typography variant="subtitle2" color="textSecondary">
          <strong>{comment.author}</strong> •{' '}
          {new Date(comment.created_utc * 1000).toLocaleString()}
        </Typography>
        <Box
          component="div" // Specify the component as 'div'
          mt={1}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
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
};

export default CommentItem;
