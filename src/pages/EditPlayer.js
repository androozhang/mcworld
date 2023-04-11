import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './EditPlayer.css'
import { supabase } from '../client'


const EditPlayer = ({data}) => {

    const {id} = useParams();
    const [player, setPlayer] = useState(data.filter(item => item.id == id)[0]);


    const updatePlayer = async (event) => {
        event.preventDefault();

        await supabase
        .from('Players')
        .update({ name: player.name, uuid: player.uuid, description: player.description })
        .eq('id', id);

        window.location = "/";
    }

    // DELETE post
    const deletePlayer = async (event) => {
        event.preventDefault();

        await supabase
        .from('Players')
        .delete()
        .eq('id', id);

        window.location = "/";
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPlayer((prePlayer) => ({
            ...prePlayer,
            [name]: value
        }));
    }
    
  
    return (
        <div>
            <form onSubmit={updatePlayer}>
                <label htmlFor="title">Name</label> <br />
                <input type="text" id="Name" name="Name" value={player.name} onChange={handleChange}/><br />
                <br/>

                <label htmlFor="author">uuid</label><br />
                <input type="text" id="uuid" name="uuid" value={player.uuid} onChange={handleChange}/><br />
                <br/>

                <label htmlFor="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" name="description" value={player.description} onChange={handleChange}>
                </textarea>
                <br/>
                <input type="submit" value="Submit" />
                <button className="deleteButton" onClick={deletePlayer}>Delete</button>
            </form>
        </div>
    )
}

export default EditPlayer;
