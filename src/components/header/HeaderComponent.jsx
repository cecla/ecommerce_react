/* 
  Header component with menu dropdown and navigation bar
*/

import React from "react";
import NavigationComponent from "./NavigationComponent";
import MenuComponent from "./MenuComponent";
import HeaderTopComponent from "./HeaderTopComponent";

const HeaderComponent = ({ menuOpen, openAndCloseMenu, menu }) => (
  <div className="header">
    <MenuComponent
      menu={menu[menuOpen]}
      menuOpen={menuOpen}
      openAndCloseMenu={openAndCloseMenu}
    />
    <HeaderTopComponent onClick={() => {}} />
    <div className="header__bottom">
      <NavigationComponent openMenu={openAndCloseMenu} />
    </div>
  </div>
);

export default HeaderComponent;
