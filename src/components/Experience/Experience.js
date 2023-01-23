import React from "react";

function Experience({ exp }){
    // const exp = props;
    return(
        <div className="experience">
            <h2 className="experience-title"> {exp.title} </h2>
            <h4 className="experience-dates">{exp.date}</h4>
            <h4 className="experience-place">{exp.place}</h4>
            <h4 className="experience-city">{exp.city}</h4>
            <p className="experience-details">{exp.details}</p>
        </div>
    )
}
 
export default Experience;