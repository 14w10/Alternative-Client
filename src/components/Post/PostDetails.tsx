// src/components/Post/PostDetails.tsx
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { marked } from 'marked';

interface PostDetailsProps {
  post: any;
}

const PostDetails: React.FC<PostDetailsProps> = ({ post }) => {
  const [htmlContent, setHtmlContent] = useState<string>('');

  useEffect(() => {
    // Convert Markdown to HTML asynchronously
    const convertMarkdown = async () => {
      const convertedHtml = await marked(post.selftext);
      setHtmlContent(convertedHtml);
    };

    convertMarkdown();
  }, [post.selftext]);
  
  return (
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
        component="div" // Specify the component as 'div'
        mt={1}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      ) : (
        <Typography variant="body1">{post.selftext}</Typography>
      )}
    </CardContent>
  </Card>
)
};

export default PostDetails;
