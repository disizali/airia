import React, { useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import Auth from "./Auth/Index";
import Contact from "./Contact";
import UserContext from "../UserContext";

class NavbarClass extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.authFormToggle = this.authFormToggle.bind(this);
    this.contactToggle = this.contactToggle.bind(this);
    this.state = {
      authOpen: false,
      contactOpen: false
    };
  }
  authFormToggle() {
    this.setState({
      authOpen: !this.state.authOpen,
      contactOpen: this.state.contactOpen && !this.state.contactOpen
    });
  }

  contactToggle() {
    this.setState({
      contactOpen: !this.state.contactOpen,
      authOpen: this.state.authOpen && !this.state.authOpen
    });
  }

  render() {
    const { user, status } = this.context;
    let profile = {};
    if (user != null) {
      profile = user.Profile;
    }
    const { authOpen, contactOpen } = this.state;
    console.log(status);
    return (
      <div>
        <Navbar
          color="white"
          light
          expand="md"
          className="rtl shadow"
          fixed="true"
        >
          <NavbarBrand href="/">
            <img src="/static/images/logo.png" alt="airia logo" width="300" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {status == -1 ? (
                <NavItem>
                  <NavLink href="#" onClick={this.authFormToggle}>
                    <img
                      src="/static/icons/user-circle.svg"
                      className="flat-icon mini-icon mx-2"
                    />
                    <span className=" mx-2">ورود - ثبت نام</span>
                    <i
                      className={`fas fa-sort-down mx-2 arrow ${
                        authOpen ? "arrow-up" : ""
                      }`}
                    ></i>
                  </NavLink>
                  <Auth authOpen={authOpen} />
                </NavItem>
              ) : (
                <NavItem>
                  <NavLink href="/dashboard">
                    <img
                      src="/static/icons/user-circle.svg"
                      className="flat-icon mini-icon mx-2"
                    />
                    <span className="mx-2 text-success">
                      {profile.name} {profile.family}
                    </span>
                  </NavLink>
                </NavItem>
              )}
              {status != 0 && (
                <NavItem>
                  <NavLink href="#" onClick={this.contactToggle}>
                    <img
                      src="/static/icons/phone-circle.svg"
                      className="flat-icon mini-icon"
                    />
                    <span className=" mx-2">تماس با ما</span>
                    <i
                      className={`fas fa-sort-down mx-2 arrow ${
                        contactOpen ? "arrow-up" : ""
                      }`}
                    ></i>
                  </NavLink>
                  <Contact contactOpen={contactOpen} />
                </NavItem>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavbarClass;
