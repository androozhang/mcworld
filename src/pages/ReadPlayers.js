import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client';

const ReadPlayers = (props) => {

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetchPlayers();
      }, []);
      

    const fetchPlayers = async () => {
        const { data } = await supabase
          .from('Players')
          .select()
          .order('created_at', { ascending: true });
      
        // Set state of posts
        setPlayers(data);
      };
      
    
      return (
        <div className="ReadPosts">
          {players && players.length > 0 ? (
            players.map((player, index) => (
              <Card
                key={player.id} // Add a unique key prop for each rendered Card component
                id={player.id}
                name={player.name}
                uuid={player.uuid}
               
              />
            ))
          ) : (
            <h2>{'No Challenges Yet 😞'}</h2>
          )}
        </div>
      );
      
}

export default ReadPlayers;