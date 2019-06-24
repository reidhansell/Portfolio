import React from 'react';
import './App.css';
import {  
  Row,
  Col,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import logo from './logo.png'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

function App() {
  return (
    <div className="App">
      <Navbar color="none" light expand="md">
          <NavbarBrand href="/"><img src={logo} alt={logo} style={{maxHeight: '5rem'}}/></NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#1"style={{marginRight: '1rem'}}><b>Projects</b></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#2"><b>Contact</b></NavLink>
              </NavItem>
            </Nav>
        </Navbar>
      <h1 style={{width: '50rem', maxWidth: '85%', marginTop: '5rem', lineHeight: '4rem'}}>I'm Reid Hansell, a <a href="https://github.com/reidhansell" target="_blank" rel="noopener noreferrer">software developer</a>, bodybuilder, and <a href="#">blogger</a> based out of the Denver area.</h1>
      <br />
      <br />
      <h2>Skills</h2>
      <Row>
        <Col style={{marginBottom: '2rem', marginRight: '5rem'}}><h4>Front-End</h4><br />React<br />BootStrap<br />JavaScript<br />CSS<br />HTML</Col>
        <Col style={{marginBottom: '2rem', marginRight: '5rem'}}><h4>Back-End</h4><br />Node (Express)<br />MongoDB<br /></Col>
        <Col style={{marginBottom: '2rem', marginRight: '5rem'}}><h4>Extras</h4><br />Git/GitHub<br />Web Hosting<br />Gimp/AdobeXD<br />Redux [in progress]</Col>
      </Row>
      <br />
      <br />
      <h2 id="1">Projects</h2>
      <h4><a href="https://simplebodybuilding.herokuapp.com/" target="_blank" rel="noopener noreferrer">Simple Bodybuilding</a></h4>
      <p>My first full stack application using the MERN stack. This web app is the solution to my frustration with today's fitness apps. I used this project to teach myself the fundamentals of back-end work.</p>
      <a href="https://github.com/reidhansell/simplebb" target="_blank" rel="noopener noreferrer">[Code]</a>
      <br />
      <br />
      <br />
      <h4><a href="https://reidhansell.com/" target="_blank" rel="noopener noreferrer">Portfolio</a></h4>
      <p>While currently a simple single page website, my portfolio has gone through many revisions and is the reason I decided to specialize in web development. I used this project to teach myself the fundamentals of front-end work.</p>
      <a href="https://github.com/reidhansell/portfolio" target="_blank" rel="noopener noreferrer">[Code]</a>
      <br />
      <br />
      <br />
      <h2 id="2">Contact</h2>
      <h4>ReidHansell@Gmail.com</h4>
      <a className="media-icon" href="https://github.com/reidhansell" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a className="media-icon" href="https://www.linkedin.com/in/reid-hansell-62123b188" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a className="media-icon" href="https://www.instagram.com/reidmhansell/" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
      <a className="media-icon" href="https://www.facebook.com/reid.hansell" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
      <a className="media-icon" href="https://twitter.com/HansellReid" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    </div>
  );
}

export default App;
