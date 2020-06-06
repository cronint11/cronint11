import React from 'react';
import { Container, Row, Col } from 'reactstrap';

// icons for skills
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import csharp from '../img/csharp.png';
import nosql from '../img/nosql.png';

const Skills = (props) => {

  return (
    <Container className="container-fluid padding">
      <Row className="text-center padding">
        <Col xs="12" sm="6" md="4" lg="4" xl="2">
          <FontAwesomeIcon icon={{ prefix: 'fas', iconName: 'code' }} />
          <h3>HTML5 & XML</h3>
        </Col>
        <Col xs="12" sm="6" md="4" lg="4" xl="2">
          <FontAwesomeIcon icon={{ prefix: 'fas', iconName: 'bold' }} />
          <h3>BOOTSTRAP</h3>
        </Col>
        <Col xs="12" sm="6" md="4" lg="4" xl="2">
          <FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'css3' }} />
          <h3>CSS</h3>
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" xl="2">
          <FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'js' }} />
          <h3>JavaScript & jQuery</h3>
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" xl="2">
          <FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'node-js' }} />
          <h3>node.js</h3>
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" xl="2">
          <FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'react' }} />
          <h3>react.js</h3>
        </Col>
        <Col xs="12" sm="6" md="4" lg="3" xl="4">
          <img alt="c sharp icon" src={csharp} className="c-sharp" />
          <h3>C# & C++ & C</h3>
        </Col>
        <Col xs="12" sm="6" md="4" lg="6" xl="4">
          <img alt="nosql icon" src={nosql} className="nosql" />
          <h3>MongoDB & IndexedDB</h3>
        </Col>
        <Col xs="12" sm="12" md="4" lg="6" xl="4">
          <FontAwesomeIcon icon={{ prefix: 'fas', iconName: 'database' }} />
          <h3>MySQL & SQL</h3>
        </Col>
      </Row>
      <hr className="my-4" />
    </Container>
  );
};

export default Skills;