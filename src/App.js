import React from "react";
import Nav from './components/Nav';
import Trip from "./components/Trip";

export default function App(){
    return(
        <div>
            <Nav/>
            <div className="trip--container">
                <Trip/>
            </div>
            
        </div>
    )
}