import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../services/api';
import PostList from '../components/Post/PostList';
import Spinner from '../components/Layout/Spinner';
import { useParams } from 'react-router-dom';
import SearchAppBar from '../components/Layout/SearchAppBar';
import ErrorHandler from '../components/Layout/ErrorHandler';

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const { sub } = useParams<{ sub: string }>();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts(sub === undefined ? "all" : sub);
        setPosts(data.data.children);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, [sub]);

  if (loading) return <Spinner />;
  if (error) return <ErrorHandler />;

  return (
    <div>
      <SearchAppBar/>
      <PostList posts={posts} />
    </div>
  );
};

export default HomePage;
