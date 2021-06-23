import React from 'react'

export default function ChirpItem({chirp, onDelete}) {
    return (

        <div id="elem">
            <h5>{`@${chirp.username}`}</h5>
            <p>{chirp.thoughts}</p>
            <button type="button" className="btn btn-outline-secondary btn-sm" onClick={()=>{onDelete(chirp)}}>Remove</button>
         </div>

        
        
    )
}
