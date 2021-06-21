import React from 'react';
import Form from "./components/Form";
import Chirp from "./components/Chirp";
import './styles/style.css'
export default function App() {
    let chirps = [
        {
            username: "gswal25",
        }
    ]
    return (
       <>
            <div className="container-fluid">
                <div className="row justify-content-around">

                    <div className="col-4 mt-4" id="form">
                        <Form/>
                    </div>
                    
                    <div className="col-6 mt-4" id="chirp">
                        <Chirp/>    
                    </div>
                    
                </div>
            </div>
            
       </>
    )
}
