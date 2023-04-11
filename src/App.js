import './App.css';
import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom'

import ReadPlayers from './pages/ReadPlayers'
import CreatePlayer from './pages/CreatePlayer'
import EditPlayer from './pages/EditPlayer'
import PlayerDetail from './pages/PlayerDetail'
import { Link } from 'react-router-dom'

// Import supabase client
import { supabase } from './client'

const App = () => {
  
  const [players, setPlayers] = useState({
    name: '',
    uuid: '',
    description: ''
}); // State for storing fetched posts

  useEffect(() => {
    // Fetch posts from database on component mount
    fetchPlayers();
  }, []);

  

  
  // Fetch posts from Supabase database
  const fetchPlayers = async () => {
    const { data } = await supabase
      .from('Players')
      .select();

    // Set state of posts
    setPlayers(data);
  }

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element:<ReadPlayers data={players}/>
    },
    {
      path:"/edit/:id",
      element: <EditPlayer data={players} />
    },
    {
      path:"/player/:id",
      element: <PlayerDetail data={players} />
    },
    {
      path:"/new",
      element: <CreatePlayer />
    }
  ]);

  return ( 
    <div className="App">
      <div className="header">
        <h1>Me MC World</h1>
        <Link to="/"><button className="headerBtn"> Explore Players 🔍  </button></Link>
        <Link to="/new"><button className="headerBtn"> Enter World  </button></Link>
      </div>
      {element}
    </div>
  );
}

export default App;
