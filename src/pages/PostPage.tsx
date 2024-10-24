// src/pages/PostPage.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostDetails from '../components/Post/PostDetails';
import CommentList from '../components/Comment/CommentList';
import { fetchPostDetails } from '../services/api';
import Spinner from '../components/Layout/Spinner';

const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<any>(null);
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getPostData = async () => {
      try {
        setLoading(true);
        const data = await fetchPostDetails(id as string);
        const postData = data[0].data.children[0].data;
        const commentsData = data[1].data.children;
        setPost(postData);
        setComments(commentsData);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      getPostData();
    }
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <div>Error loading post: {error.message}</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <PostDetails post={post} />
      <CommentList comments={comments} />
    </div>
  );
};

export default PostPage;
