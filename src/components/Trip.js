import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Trip(props){
    return(
        <div className="trip--row">
            <img className="trip--image" src={`images/${props.trip.image_url}`} alt="Trip pic'"/>
            <div className="trip--detail">
                <div className="trip--location">
                    <span className="location--country">
                        <FontAwesomeIcon icon={faLocationDot} className='country--icon'/>
                        <h3 className="country--title">{props.trip.location}</h3>
                        <a href={props.trip.google_maps_url} target="_blank" className="country--link">Voir sur Maps</a>
                    </span> 
                    
                </div>
                <h1 className="trip--title">{props.trip.title}</h1>
                <div className="trip--date"> {props.trip.start_date} - {props.trip.end_date}</div>
                <p className="trip--description">
                    {props.trip.description}
                </p>
            </div>
        </div>
    )
}
