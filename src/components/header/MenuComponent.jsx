/*
  Component displaying the blue menu component, headerTop, search field, navigation and menu
*/

import React from "react";
import NavigationComponent from "./NavigationComponent";
import HeaderTopComponent from "./HeaderTopComponent";

const MenuList = ({ header, list }) => (
  <div className="menu-list width-50">
    {header && <h4>{header}</h4>}
    {list && list.map(({ link, linkText }) => <a href={link}>{linkText}</a>)}
  </div>
);

const MenuComponent = ({ menu, menuOpen, openAndCloseMenu }) => (
  <div className={`header__dropdown-menu${menuOpen !== "" ? " is-open" : ""}`}>
    <div className="header__dropdown-menu-top">
      <HeaderTopComponent onClick={() => openAndCloseMenu("")} />
    </div>
    <div className="header__dropdown-menu-bottom">
      <div className="search-input">
        <input type="text" />
      </div>
      <NavigationComponent active={menuOpen} openMenu={openAndCloseMenu} />
      <div className="menu">
        {menu &&
          menu.map(menulist => <MenuList key={menulist.id} {...menulist} />)}
      </div>
    </div>
  </div>
);

export default MenuComponent;
