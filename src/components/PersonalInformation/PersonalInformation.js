import Picture from "./Picture";

function PersonalInformation(){
    return(
        <div className="personal-information">
            <Picture/>
            <p className="name">Nom Prénom</p>
            <p className="age">XX yo</p>
        </div>
    );
    };
    
export default PersonalInformation;