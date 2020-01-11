import React from 'react';
import { Link } from "gatsby"
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar__logo"><Link to="/">Michelle Williams</Link></div>
            <div className="spacer" />
            <div className="toolbar__navigation-items">
                <ul>
                    <li><Link to="/About/">About</Link></li>
                    <li><Link to="/Projects/">Projects</Link></li>
                    <li><Link to="/Contact/">Contact</Link></li>
                    <li><Link to="/Blog/">Blog</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;