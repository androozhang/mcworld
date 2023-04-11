import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './PlayerDetail.css';
import { supabase } from '../client';


const PlayerDetail = ({data}) => {

    const {id} = useParams();
    const player = (data.filter(item => item.id == id)[0]);

  
    return (
        <div>
            <div className='card'>
            <h3>{player.name}</h3>
            <img src={`https://crafatar.com/avatars/${player.uuid}`} alt="img"/>
            <p>{player.description}</p>
            </div>
        </div>
    )
}

export default PlayerDetail;
