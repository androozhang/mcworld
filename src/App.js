import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import PostDetail from './pages/PostDetail'
import Navbar from './components/Navbar';

// Import supabase client
import { supabase } from './client'

const App = () => {
  
  const [posts, setPosts] = useState({
    title: '',
    description: '',
    vote: ''
}); // State for storing fetched posts

  useEffect(() => {
    // Fetch posts from database on component mount
    fetchPosts();
  }, []);

  

  
  // Fetch posts from Supabase database
  const fetchPosts = async () => {
    const { data } = await supabase
      .from('Post')
      .select();

    // Set state of posts
    setPosts(data);
  }

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPosts data={posts}/>
    },
    {
      path:"/edit/:id",
      element: <EditPost data={posts} />
    },
    {
      path:"/post/:id",
      element: <PostDetail data={posts} />
    },
    {
      path:"/new",
      element: <CreatePost />
    }
  ]);

  return ( 
    <div className="App">
      <Navbar />
      {element}
    </div>
  );
}

export default App;