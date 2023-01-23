import Experience from "./Experience";
 import { ExperienceData } from "../../data/ExperienceData";
import React from "react";

 function ExperienceList(){
    // const list = ExperienceData;
    return(
        <div>
        <h1 className="experience-list">Experience list</h1>
        <ul>
        {/* <h1>list[0].title</h1> */}

            {ExperienceData.map((exp, index) => (
                <>
                <li key={index}> 
                    <Experience exp={exp} />
                </li>
                </>
            ))}
        </ul>
        </div>
    )
}

export default ExperienceList;