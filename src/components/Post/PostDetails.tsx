import React from 'react';
import { Card, CardContent, Typography, Box, CardMedia } from '@mui/material';
import he from 'he';

interface PostDetailsProps {
  post: any;
}

const PostDetails: React.FC<PostDetailsProps> = ({ post }) => {

  return (
    <Card sx={{ padding: 3 }}>
      <CardContent>
        <Box mb={2}>
          <Typography variant="h4" component="h1">
            {he.decode(post.title)}
          </Typography>
        </Box>
        <Box mb={2}>
          <Typography variant="subtitle1" color="textSecondary">
            Posted by {post.author}
          </Typography>
        </Box>
        {post.preview && post.preview.images.length > 0 && (
          <Box mb={2}>
            {post.preview.images.map((image: any, index: number) => {
              const imageUrl = he.decode(image.source.url);
              return (
                <CardMedia
                  key={index}
                  component="img"
                  image={imageUrl}
                  alt={`${he.decode(post.title)} - image ${index + 1}`}
                  sx={{ maxHeight: 500, objectFit: 'contain', mb: 2 }}
                />
              );
            })}
          </Box>
        )}
        {post.selftext_html ? (
          <Box
            component="div"
            mt={1}
            dangerouslySetInnerHTML={{
              __html: he.decode(post.selftext_html),
            }}
          />
        ) : (
          <Typography variant="body1">{he.decode(post.selftext)}</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default PostDetails;
