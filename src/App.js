import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';

// import components
import Navigation from './components/Navigation';
import Slides from './components/Slides';
import Skills from './components/Skills';

// import images
import cane_wide from './img/Cane-wide.jpg';
import frisbee from './img/frisbee.gif';
import jeffe_wide from './img/Jeffe-wide.jpg';
import jon_dough_wide from './img/Jon Dough-wide.jpg';
// import mac from './img/mac.png';
import profile_pic from './img/profile_pic.jpg';

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faBold, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCss3, faJs, faNodeJs, faReact, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCode, faBold, faCss3, faJs, faNodeJs, faReact, faDatabase, faLinkedin, faGithub, faEnvelope);

const App = (props) => {

  return (
    <div className="App">
      <header className="App-header">
        {/* <!-- Navbar ---> */}
        <Navigation />

        {/* <!--- Carousel ---> */}
        <Slides />

        {/* <!--- Jumbotron ---> */}

        {/* <!-- <div id="about" className="container-fluid">
        <row className="row jumbotron">
          <div className="col-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
            <p className="lead"></p>
          </div>
        </row>
          </div>
      <div id="portfolio" className="container-fluid">
        <row className="row jumbotron">
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
            <p className="lead"></p>
          </div>
        </row>
      </div>
      <div id="contact" className="container-fluid">
        <row className="row jumbotron">
          <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
            <p className="lead"></p>
          </div>
        </row>
      </div> --> */}

        {/* <!--- Welcome Section ---> */}
        <Container className="text-center">
          <Row className="welcome text-center">
            <Col xs="12">
              <h1 className="display-4">About Me</h1>
              <hr />
              <Col xs="12">
                <p className="lead">Currently living in Miami and seeking employment utilizing full stack programming.  Looking to continue building skills within programming and adjacent to it.</p>
              </Col>
            </Col>
          </Row>
        </Container>

        {/* <!--- Skill Icon Section ---> */}
        <Skills />

        {/* <!--- Example Project Section ---> */}
        <Container className="container-fluid padding">
          <Row className="text-center padding">
            <Col xs="12">
              <h2>Example projects</h2>
              <p className="lead">Here are some sample projects worked on in bootcamp.</p>
            </Col>
            <Col md="6" lg="4"><span>placeholder for example #1</span></Col>
            <Col md="6" lg="4"><span>placeholder for example #2</span></Col>
            <Col md="12" lg="4"><span>placeholder for example #3</span></Col>
          </Row>
        </Container>

        {/* <!--- Secret Message ---> */}
        <hr className="my-4" />
        <figure>
          <div className="fixed-wrap">
            <div id="fixed" className="text-center">
              <span>Hello, Friend!</span>
            </div>
          </div>
        </figure>

        {/* <!--- gif Section ---> */}
        <button className="fun" data-toggle="collapse" data-target="#emoji">click for fun</button>
        <div id="emoji" className="collapse">
          <Container className="container-fluid padding">
            <Row className="text-center">
              <Col xs="12" sm="6" md="3">
                <img alt="frisbee gif" className="gif" src={frisbee} />
              </Col>
              <Col xs="12" sm="6" md="3">
                <span>placeholder</span>
              </Col>
              <Col xs="12" sm="6" md="3">
                <span>placeholder</span>
              </Col>
              <Col xs="12" sm="6" md="3">
                <span>placeholder</span>
              </Col>
            </Row>
          </Container>
        </div>

        {/* <!--- Meet the pets ---> */}
        <Container className="container-fluid padding">
          <Row className="welcome text-center">
            <Col xs="12">
              <h1 className="display-4">Meet the Pets</h1>
            </Col>
            <hr />
          </Row>
        </Container>

        {/* <!--- Cards ---> */}
        <Container className="container-fluid padding">
          <Row className="padding">
            <Col xs="12" md="4">
              <div className="card">
                <img alt="Cane a Rhodesian Ridgeback" className="card-img-top" src={cane_wide} />
                <div className="card-body">
                  <h4 className="card-title">Cane</h4>
                  <p className="card-text">We've been told he is a paradigmatic Rhodesian Ridgeback! (Had to look that one up - means poster child <i className="em em-grin"></i>) Instead of hunting lions, he chases his black on black striped brother!</p>
                  <button type="button" className="link-button btn btn-outline-secondary" href="/cane">See Profile</button>
                </div>
              </div>
            </Col>
            <Col xs="12" md="4">
              <div className="card">
                <img alt="Jeffe a black cat" className="card-img-top" src={jeffe_wide} />
                <div className="card-body">
                  <h4 className="card-title">Jefferson</h4>
                  <p className="card-text">AKA El Jeffe and Heifer. He delights in eating from Cane's bowl and keeping the house free from all insects - by eating them <i className="em em-woozy_face"></i>. Let's be honest - we're just happy he lets us cohabitate with him!</p>
                  <button type="button" className="link-button btn btn-outline-secondary" href="/jeffe">See Profile</button>
                </div>
              </div>
            </Col>
            <Col xs="12" md="4">
              <div className="card">
                <img alt="Jon Dough a sourdough starter" className="card-img-top" src={jon_dough_wide} />
                <div className="card-body">
                  <h4 className="card-title">Jon Dough</h4>
                  <p className="card-text">The number one fungi in the house! Ironically Jon spends most of his time hiding from Jeffe in the microwave... He may be the most boring pet, but we feed him everyday anyway!</p>
                  <button type="button" className="link-button btn btn-outline-secondary" href="/jon">See Profile</button>
                </div>
              </div>
            </Col>
          </Row>
          <hr />
        </Container>


        {/* <!--- Contact ---> */}
        <Container className="container-fluid padding">
          <Row className="contact text-center padding">
            <Col xs="12">
              <h2>Contact</h2>
              <hr />
            </Col>
            <Col xs="12" className="social padding">
              <a href="https://www.linkedin.com/in/cronint11" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'linkedin' }} /></a>
              <a href="https://github.com/cronint11/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={{ prefix: 'fab', iconName: 'github' }} /></a>
              <a href="mailto:tm.timcronin@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={{ prefix: 'far', iconName: 'envelope' }} /></a>
            </Col>
            <Col xs="12" className="text-center padding">
              <a href="https://docs.google.com/document/d/1NFWiOeYKZ0zj6YqPjXzyfg305p7obn6P3zop9E68H4Y/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><h4>Resume</h4></a>
            </Col>
          </Row>
        </Container>

        {/* <!--- Footer ---> */}
        <footer>
          <Container className="container-fluid padding">
            <Row className="text-center">
              <Col xs="12" md="6">
                <img alt="Tim Cronin" src={profile_pic} className="myIcon" />
                <h4>Tim Cronin</h4>
                <hr className="light" />
                <p>Miami, FL</p>
                <p>+1-303-385-3036</p>
                <a href="mailto:tm.timcronin@gmail.com" target="_blank" rel="noopener noreferrer">tm.timcronin@gmail.com</a>
              </Col>
              {/* <!-- <div className="col-md-4">
                  <hr className="light" />
                  <h5>Blah</h5>
                  <hr className="light" />
                  <p>blah blah blah</p>
                  <p>yarg yarg yarg</p>
                  <p>aye aye aye</p>
                </div> --> */}
              <Col xs="12" md="6">
                <hr className="light" />
                <h5>Services</h5>
                <hr className="light" />
                <p>QA Implementation</p>
                <p>Progressive Web Apps</p>
                <p>Data Analysis</p>
              </Col>
              <hr className="light w100" />
              <Col xs="12">
                <h5>&copy; Tim Cronin 2020</h5>
              </Col>
            </Row>
          </Container>
        </footer>
      </header>
    </div>
  );
}

export default App;
