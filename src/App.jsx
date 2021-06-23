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

    const addChirps = (username, thoughts) => {
        let sno;
        if(chirps.length === 0){
            sno  = 0;
        }
        else{
            sno = chirps[chirps.length - 1].sno + 1;
        }
        
        const myChirp = {
            sno: sno,
            username: username,
            thoughts: thoughts
        }

        console.log(myChirp);
        setChirps([...chirps, myChirp]);
    }

    const[chirps, setChirps] = useState(
        
        [
   
        ]
    );
  

    return (
       <>
            <div className="container-sm mx-auto">
                <div id="form">
                    <Form addChirps={addChirps}/>
                </div>

                <div id="chirp">
                    <Chirp chirps={chirps} onDelete={onDelete}/>    
                </div>
            </div>
            
       </>
    )
}
