// src/components/Post/PostItem.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

interface PostItemProps {
  post: any;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => (
  <Card sx={{ padding: 2, marginBottom: 2 }}>
    <CardContent>
      <Box mb={1}>
        <Typography variant="h5" component="h2">
          {post.title}
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="subtitle2" color="textSecondary">
          Posted by {post.author}
        </Typography>
      </Box>
      <Button
        component={Link}
        to={`/post/${post.id}`}
        variant="contained"
        color="primary"
      >
        View Comments
      </Button>
    </CardContent>
  </Card>
);

export default PostItem;
