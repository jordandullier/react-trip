import React from "react";
import Nav from './components/Nav';
import Trip from "./components/Trip";
import data from './data'

export default function App(){

    const trips = data.map((data)=>{
        return(
            <Trip 
                key={data.id}
                trip={data}
            />
        )
    })

    return(
        <div>
            <Nav/>
            <div className="trip--container">
                {trips}
            </div>
        </div>
    )
}