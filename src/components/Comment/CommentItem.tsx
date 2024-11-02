import { Box, Typography, Paper } from '@mui/material';
import he from 'he';

interface CommentItemProps {
  comment: any;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {

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
          dangerouslySetInnerHTML={{ __html: he.decode(comment.body_html) }}
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
