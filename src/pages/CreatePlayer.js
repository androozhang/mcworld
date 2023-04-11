import React, { useState } from 'react';
import { supabase } from '../client';
import './CreatePlayer.css';

const CreatePlayer = () => {
    const [player, setPlayer] = useState({
        name: '',
        uuid: '',
        description: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target; // Update to name and value
        setPlayer({ ...player, [name]: value }); // Update to name
    };

    const createPlayer = async (event) => {
        event.preventDefault();

        await supabase
            .from('Players')
            .insert({ name: player.name, uuid: player.uuid, description: player.description})
            .select();

        window.location = '/';
    };

    return (
        <div>
            <form onSubmit={createPlayer} id='form'>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={player.name} onChange={handleChange} /><br /> {/* Update id and name */}
                <br />

                <label htmlFor="uuid">UUID</label><br />
                <a href="https://minecraftuuid.com/">You can find on here</a>
                <input type="text" id="uuid" name="uuid" value={player.uuid} onChange={handleChange} /><br /> {/* Update id and name */}
                <br />

                <label htmlFor="description">Description</label><br />
                <textarea rows="5" cols="50" id="description" name="description" value={player.description} onChange={handleChange}>
                </textarea>
                <br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CreatePlayer;
