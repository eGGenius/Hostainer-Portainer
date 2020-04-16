import React, { Component } from "react";
import { Sidebar, Menu, Icon, Segment } from "semantic-ui-react";
import { Link, Route, Router } from "react-router-dom";
import RouterSwitch from "../../routes/routes";
import "./navigation-and-layout.css";

// Navigations-Sidebar und Container für die Seiteninhalte
// angezeigte Inhalte werden über Router gesteuert
class NavigationAndLayout extends Component {
  state = {
    visible: true,
    activeItem: "meine apps",
    isLoggedIn: true,
    isMobile: false,
  };

  toggleSidebar = () => () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    if (this.state.isMobile) {
      this.setState({visible: false});
    }
  };

  // updateBoolean
  updateIsMobileAndVisibleState() {
    if (window.innerWidth < 700) {
      this.setState({ isMobile: true, visible: false });
    } else {
      this.setState({ isMobile: false, visible: true });
    }
  }

  // Add event listener
  componentDidMount() {
    this.updateIsMobileAndVisibleState();
    window.addEventListener("resize", this.updateIsMobileAndVisibleState.bind(this));
  }

  // Remove event listener
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateIsMobileAndVisibleState.bind(this));
  }

  render() {
    const { activeItem, visible, isLoggedIn, isMobile } = this.state;

    return (
      <Router>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="push"
            // icon="labeled"
            vertical
            visible={visible}
            inverted
            width="thin"
          >
            <Menu.Item header>Hostainer</Menu.Item>
            <Menu.Item
              name="meine apps"
              as={Link}
              to="/my-apps"
              active={activeItem === "meine apps"}
              onClick={this.handleItemClick}
            >
              <Icon name="play" />
              Meine Apps
            </Menu.Item>
            <Menu.Item
              name="app store"
              as={Link}
              to="/apps"
              active={activeItem === "app store"}
              onClick={this.handleItemClick}
            >
              <Icon name="rocket" />
              App Store
            </Menu.Item>
            <div id="nav-bottom">
              <Menu.Item
                name="logout"
                as={Link}
                to="/logout"
                active={activeItem === "logout"}
                onClick={this.handleItemClick}
              >
                <Icon name="sign-out" />
                Abmelden
              </Menu.Item>
            </div>
          </Sidebar>
          <Sidebar.Pusher id={visible ? "sidebar-visible" : "sidebar-hidden"}>
            {isMobile ? (
              <div id="burger-menu-bar">
                <div id="burger-menu-button" onClick={this.toggleSidebar()}>
                  <BurgerMenuButton />
                </div>
              </div>
            ) : (
              ""
            )}
            <Segment basic>
              <RouterSwitch isLoggedIn={isLoggedIn} />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Router>
    );
  }
}

export default NavigationAndLayout;

function BurgerMenuButton() {
      return (
        <React.Fragment>
          <div className="burger-menu-div"></div>
          <div className="burger-menu-div"></div>
          <div className="burger-menu-div"></div>
        </React.Fragment>
      );
}