import React, {useState} from 'react';
import Form from "./components/Form";
import Chirp from "./components/Chirp";
import './styles/style.css'
export default function App() {
    const onDelete = (chirp)=>{
        setChirps(chirps.filter((e) => {
            return e !== chirp;
        }));
    }

    const[chirps, setChirps] = useState(
        
        [
            {
                sno: 1,
                username: 'gswal25',
                thoughts: "all is well"
            },
    
            {   
                sno: 2,
                username: "pswal89",
                thoughts: "god is great"
            },
    
            {   
                sno: 3,
                username: "nswal45",
                thoughts: "nothing is possible"
            }
        ]
    );
  

    return (
       <>
            <div className="container-sm mx-auto">
                <div id="form">
                    <Form/>
                </div>

                <div id="chirp">
                    <Chirp chirps={chirps} onDelete={onDelete}/>    
                </div>
            </div>
            
       </>
    )
}
