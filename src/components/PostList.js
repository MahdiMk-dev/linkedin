import React, { useState, useEffect } from 'react';
import '../styles/ListPosts.css';
const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [content, setContent] = useState('');
  const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost/linkedin/linkedin/backend/get_posts.php');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost/linkedin/linkedin/backend/dd_post.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({  content })
      });
      const data = await response.json();
      alert(data.message);

      setContent('');
      // Fetch posts again to update the list
      fetchPosts();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="post-list">
      <h2>Posts</h2>
      <div className="post-form">
        <h3>Add New Post</h3>
        <form onSubmit={handleSubmit}>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Enter content"></textarea>
          <button type="submit">Add Post</button>
        </form>
      </div>
      
        {posts.map(post => (
          <div className="card-container">
          <div key={post.id} className="card">
            <p>{post.content}</p>
          </div>
           </div>
        ))}
     
    </div>
  );
};

export default PostList;
