import React, { useState, useEffect} from "react";
import { Sidebar, Menu, Icon, Segment } from "semantic-ui-react";
import { Link, Router } from "react-router-dom";
import RouterSwitch from "../../routes/routes";
import "./nav-and-layout.css";

// Navigations-Sidebar und Container für die Seiteninhalte
// angezeigte Inhalte werden über Router gesteuert
function NavAndLayout () {
    const [visible, setVisible] = useState(true);
    const [activeItem, setActiveItem] = useState("meine apps");
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [sidebarPusherId, setSidebarPusherId] = useState("sidebar-visible");


    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
    }
    
    useEffect(() => {
        if(visible) {
            setSidebarPusherId("sidebar-visible")
        } else {
            setSidebarPusherId("sidebar-hidden")
        }
    }, [visible])

    // prüfe Breite beim Seitenaufruf
    useEffect(() => {
        if(window.innerWidth<700) {
            setVisible(false);
        }
    }, [])

    // prüfe Veränderung der Fenstergröße
    useEffect(() => {
        const resizeListener = () => {
            if(window.innerWidth < 700) {
                setVisible(false)
            } else {
                setVisible(true)
            }
        }
        window.addEventListener('resize', resizeListener);
        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    }, []);

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
              onClick={handleItemClick}
            >
              <Icon name="play" />
              Meine Apps
            </Menu.Item>
            <Menu.Item
              name="app store"
              as={Link}
              to="/apps"
              active={activeItem === "app store"}
              onClick={handleItemClick}
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
                onClick={handleItemClick}
              >
                <Icon name="sign-out" />
                Abmelden
              </Menu.Item>
            </div>
          </Sidebar>
          <Sidebar.Pusher id={sidebarPusherId}>
            <div id="burger-menu-bar">
              <div id="burger-menu-button" onClick={() => setVisible(!visible)}>
                <BurgerMenuButton />
              </div>
            </div>
            <Segment basic>
              <RouterSwitch isLoggedIn={isLoggedIn} />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Router>
    );
}

function BurgerMenuButton() {
    return (
        <React.Fragment>
            <div className="burger-menu-div"></div>
            <div className="burger-menu-div"></div>
            <div className="burger-menu-div"></div>
        </React.Fragment>
    );
}

export default NavAndLayout;