import React from 'react'
import ChirpItem from './ChirpItem'
export default function chirp(props) {
    return (

        <div>

            {props.chirps.map((chirp) => {
                return <ChirpItem chirp={chirp} key={chirp.sno} onDelete={props.onDelete}/>
            })}

        </div>
        
        
    )
}
