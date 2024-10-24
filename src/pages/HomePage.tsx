import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';
import PostList from '../components/Post/PostList';
import Spinner from '../components/Layout/Spinner';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts('all');
        setPosts(data.data.children);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) return <Spinner />;
  if (error) return <div>Error loading posts.</div>;

  return <PostList posts={posts} />;
};

export default HomePage;
