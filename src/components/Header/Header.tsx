import React from 'react';
import logo from "@/assets/images/logo.jpg";
import MenuItem from '../MenuItem/MenuItem';

type Props = {}

export default function Header({}: Props) {
    const menuItems = [
        {
            "text": "Home",
            "href": "/",
        },
        {
            "text": "All Products",
            "href": "/shop"
        },
        {
            "text": "Tutorials",
            "href": "/",
        },
        {
            "text": "About",
            "href": "/",
        },
        {
            "text": "Contacts",
            "href": "/",
        },
    ]
    return (
        <header>
            <div className='logo__wrap'>
                <img src={logo.src} alt="logo" />
            </div>
            <nav className="menu__wrap">
                <ul className="menu">
                    {
                        menuItems.map((item, index) => {
                            return (
                                <MenuItem href={item.href} key={`menu-item-${index}`}>
                                    {item.text}
                                </MenuItem>
                            )
                        })
                    }
                </ul>
            </nav>
        </header>
    )
}