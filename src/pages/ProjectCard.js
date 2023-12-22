import Accordion from 'react-bootstrap/Accordion';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import React from 'react';

const ProjectCard = (props) => {
  return (
    <Accordion defaultActiveKey="null">
        <Accordion.Item eventKey="0">
            <Accordion.Header>{props.title}</Accordion.Header>
            <Accordion.Body>
                <div>{props.description}</div>
                <div className="mt-3">
                    <Link to={props.buttomlink} target="_blank">
                    <Button variant="primary">{props.buttomname}</Button>
                </Link>
                </div>               
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
  );
};

export default ProjectCard;
