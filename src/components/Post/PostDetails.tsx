// src/components/Post/PostDetails.tsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

interface PostDetailsProps {
  post: any;
}

const PostDetails: React.FC<PostDetailsProps> = ({ post }) => (
  <Card sx={{ padding: 3 }}>
    <CardContent>
      <Box mb={2}>
        <Typography variant="h4" component="h1">
          {post.title}
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="subtitle1" color="textSecondary">
          Posted by {post.author}
        </Typography>
      </Box>
      {post.selftext_html ? (
        <Box
          dangerouslySetInnerHTML={{ __html: post.selftext_html }}
        />
      ) : (
        <Typography variant="body1">{post.selftext}</Typography>
      )}
    </CardContent>
  </Card>
);

export default PostDetails;
