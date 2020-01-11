import React from 'react';
import { Link } from "gatsby"
import './SideDrawer.css';

function SideDrawer ({ isOpen, setIsOpen }) {
    const links = [
        {to: "/About/", title: "About"},
        {to: "/Projects/", title: "Projects"},
        {to: "/Contact/", title: "Contact"},
        {to: "/Blog/", title: "Blog"}
    ];

    return(
        <nav className={`side-drawer ${isOpen ? 'open' : '' }`}>
            <ul>
                {links.map(linkItem => <DrawerLink onOpen={() => setIsOpen(false)} link={linkItem} />)}
            </ul>
        </nav>
    );
}

function DrawerLink({onOpen, link}) {
    const {to, title } = link;
    return <Link onClick={() => onOpen()} to={to}>{title}</Link>
}

export default SideDrawer