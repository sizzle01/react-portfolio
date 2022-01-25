import React from "react";

import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavbarBrand,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub
  
} from "@material-ui/icons";
import {  NavLink, withRouter } from "react-router-dom";
import resumeData from "../../utils/resume.Data";
import CustomButton from "../Button/Button";
import "./header.css";

const Header = (props) => {
  const pathName = props?.location?.pathname;
  return (
    <Navbar expand="lg" sticky="top" className="header">
      {/*Home Link */}
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName == "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>

          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName == "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => (
            <a href={resumeData.socials[key].link} target="_blank">
              {resumeData.socials[key].icon}
            </a>
          ))}
          <CustomButton className='hire-button' text={
             <a className='hire-button' href="https://www.linkedin.com/in/aliyu-muritala-67b4b015b/"  target="_blank">
            Hire Me
            </a>
            } icon={<LinkedIn />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
