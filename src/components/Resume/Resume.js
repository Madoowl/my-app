import { Container, Row, Col} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Abstract from './../Abstract/Abstract';
import FormationList from './../Formation/FormationList';
import ExperienceList from './../Experience/ExperienceList';
import PersonalInformation from './../PersonalInformation/PersonalInformation';

function Resume(){
    return(
        <div className="resume">
            <Container>
                <Row>
                    <Col md={4} className='left-side'>
                        <PersonalInformation/>
                    </Col>
                    <Col md={8} class-Name='right-side'>
                        <Abstract/>
                        <FormationList/>
                        <ExperienceList/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
    
export default Resume;