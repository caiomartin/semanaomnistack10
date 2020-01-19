import React from 'react'

import './style.css'

function DevItem({ dev }) {
    return(
        <li className="dev-item">
            <header>
                <img src={dev.avatar_url} alt={dev.name}/>
                <div className="user-info">
                  <strong>{dev.name}</strong>
                  <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/diego3g/${dev.github_username}`}>Acessar perfil Github</a>
        </li>  
    )

}

export default DevItem;