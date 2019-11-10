import React, { useContext } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import Auth from "./Auth/Index";
import Contact from "./Contact";
import Access from "./Access";
import UserContext from "../UserContext";
class NavbarClass extends React.Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.authFormToggle = this.authFormToggle.bind(this);
    this.contactToggle = this.contactToggle.bind(this);
    this.accessToggle = this.accessToggle.bind(this);

    this.getControlPanel = this.getControlPanel.bind(this);
    this.collapseToggle = this.collapseToggle.bind(this);

    this.state = {
      collapsed: true,
      authOpen: false,
      contactOpen: false,
      accessOpen: false
    };
  }

  collapseToggle() {
    this.setState({ collapsed: !this.state.collapsed });
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
      authOpen: this.state.authOpen && !this.state.authOpen,
      accessOpen: this.state.accessOpen && !this.state.accessOpen
    });
  }

  accessToggle() {
    this.setState({
      accessOpen: !this.state.accessOpen,
      contactOpen: this.state.contactOpen && !this.state.contactOpen
    });
  }

  getControlPanel() {
    const { user, status } = this.context;
    const { authOpen, accessOpen } = this.state;
    let profile = {};
    if (user != null) {
      profile = user.Profile;
    }
    switch (status) {
      case 0:
        return "";
      case 1:
        return (
          <NavItem>
            <NavLink href="#" onClick={this.accessToggle}>
              <img
                src="/static/icons/user-circle.svg"
                className="flat-icon mini-icon mx-2 d-inline-block"
              />
              <span className="mx-2">
                {profile.name || "مدیریت"} {profile.family || "حساب"}
              </span>
              <i
                className={`fas fa-sort-down mx-2 arrow ${
                  accessOpen ? "arrow-up" : ""
                }`}
              ></i>
            </NavLink>
            <Access accessOpen={accessOpen} />
          </NavItem>
        );
      case -1:
        return (
          <NavItem>
            <NavLink href="#" onClick={this.authFormToggle}>
              <img
                src="/static/icons/user-circle.svg"
                className="flat-icon mini-icon mx-2"
              />
              <span className="mx-2 d-none d-sm-inline-block">
                ورود - ثبت نام
              </span>
              <i
                className={`fas fa-sort-down mx-2 arrow ${
                  authOpen ? "arrow-up" : ""
                }`}
              ></i>
            </NavLink>
            <Auth authOpen={authOpen} />
          </NavItem>
        );
    }
  }

  render() {
    const { user, status } = this.context;
    let profile = {};
    if (user != null) {
      profile = user.Profile;
    }
    const { authOpen, contactOpen } = this.state;
    return (
      <div>
        <Navbar
          color="white"
          light
          expand="md"
          className="rtl shadow bg-white"
          fixed="true"
        >
          <NavbarBrand href="/">
            <img
              src="/static/images/logo.png"
              alt="airia logo"
              width="300"
              className="d-none d-md-block"
            />
            <img
              src="/static/images/icon.png"
              alt="airia logo"
              width="70"
              className="d-sm-block d-md-none d-lg-none d-xl-none"
            />
          </NavbarBrand>
          <Nav className="d-none d-md-flex">
            <NavItem className="border-left">
              <NavLink href="/?tab=tours">
                <i className="fas fa-route mx-1"></i>
                <span className="mx-1">تور ها</span>
              </NavLink>
            </NavItem>
            <NavItem className="border-left">
              <NavLink href="/?tab=services">
                <i className="fas fa-clone mx-1"></i>
                <span className="mx-1">خدمات</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/?tab=magazine">
                <i className="fas fa-newspaper mx-1"></i>
                <span className="mx-1">مجله</span>
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="mr-sm-auto" navbar>
            <div className="navbar-container d-flex">
              {this.getControlPanel()}
              {status != 0 && (
                <NavItem>
                  <NavLink href="#" onClick={this.contactToggle}>
                    <img
                      src="/static/icons/phone-circle.svg"
                      className="flat-icon mini-icon"
                    />
                    <span className="mx-2 d-none d-sm-inline-block">
                      تماس با ما
                    </span>
                    <i
                      className={`fas fa-sort-down mx-2 arrow ${
                        contactOpen ? "arrow-up" : ""
                      }`}
                    ></i>
                  </NavLink>
                  <Contact contactOpen={contactOpen} />
                </NavItem>
              )}
            </div>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default NavbarClass;
