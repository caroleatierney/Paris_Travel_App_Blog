import { useState } from 'react'
import Star from './Starx.js';

import '../App.css';

export default function RatingStars () {
    const [desireIndex, setDesireIndex] = useState();
    const desireToSee = ['Not At All', 'If Free', 'If In Area', 'Try To Fit In', 'Must Go'];
    const activeStar = {
        fill: 'yellow'
    };

    const changeDesireIndex = (index) => {
        setDesireIndex(index);
    }

    return (
        <div className="container">
            <h1 className="result montserrat fs-6"> {desireToSee[desireIndex] ? desireToSee[desireIndex] : 'You didn\'t review yet'} </h1>
            <div className="stars">
                {
                    desireToSee.map((desire, index) => (
                        <Star
                            index={index}
                            key={desire}
                            changeDesireIndex={changeDesireIndex}
                            style={desireIndex > index ? activeStar : {}}
                        />
                    ))
                }
            </div>       
        </div>
    )
}