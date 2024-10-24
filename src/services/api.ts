// src/services/api.ts
import axios from 'axios';

export const fetchPosts = async (subreddit: string) => {
  const response = await axios.get(`https://www.reddit.com/r/${subreddit}.json`);
  return response.data;
};

export const fetchPostDetails = async (postId: string) => {
  const response = await axios.get(`https://www.reddit.com/comments/${postId}.json`);
  return response.data;
};
