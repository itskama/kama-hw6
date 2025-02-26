import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axiosInstance";
import "./PostsList.css";

type Post = {
  id: number;
  title: string;
};

const PostsList: React.FC = () => {
  const { userId } = useParams<{ userId: string }>();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get<Post[]>(`/posts?userId=${userId}`);
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    };

    fetchPosts();
  }, [userId]);

  return (
    <div className="posts-container">
      <h1>Posts</h1>
      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <p>{post.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostsList;
