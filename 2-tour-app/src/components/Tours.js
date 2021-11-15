import React from "react";
import Tour from './Tour';

const Tours = ({ tour ,remove}) => {
    return (
        <div className="container">
            <h1>Our Tour</h1>
            <div className="row">
            </div>
            {tour.map((tour) => {
                return (
                    <Tour key={tour.id} {...tour} remove={remove}/>
                );
            })}
        </div>

    );
}

export default Tours;