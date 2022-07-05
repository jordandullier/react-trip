import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

export default function Trip(){
    return(
        <div className="trip--row">
            <img className="trip--image" src="../../images/Islande.jpg" alt="Trip pic'"/>
            <div className="trip--detail">
                <div className="trip--location">
                    <span className="location--country">
                        <FontAwesomeIcon icon={faLocationDot} className='country--icon'/>
                        <h3 className="country--title">ISLANDE</h3>
                        <a href='#!' className="country--link">Voir sur Maps</a>
                    </span> 
                    
                </div>
                <h1 className="trip--title">Plage des diamants</h1>
                <div className="trip--date"> 02 Déc 2019 - 11 Déc 2019</div>
                <p className="trip--description">
                    La plage de diamants est une plage de sable noir appartenant à la grande plaine glaciaire de Breiðamerkursandur, située près du lagon glaciaire de Jökulsárlón sur la côte sud de l'Islande.
                </p>
            </div>
        </div>
    )
}
