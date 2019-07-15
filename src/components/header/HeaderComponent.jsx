/* 
  Header component with menu dropdown and navigation bar
*/

import React from "react";
import NavigationComponent from "./NavigationComponent";
import MenuComponent from "./MenuComponent";

const HeaderTopComponent = ({ onClick }) => (
  <div className="header__top">
    <div className="header__left" onClick={() => onClick()}>
      <svg height="20px" viewBox="0 0 554.708 120.807">
        <path d="M424.971 5.65v7.795l3.543 1.417c13.465 5.433 13.465 5.433 13.465 19.134v31.89l-.354 24.803c-.236 17.598-.236 17.598-11.693 19.843l-3.543.709v7.795h45.354v-7.795l-3.543-.709c-13.583-2.717-14.291-2.717-14.528-19.843l-.354-24.803v-31.89l72.283 85.039h10.63V58.799l.354-24.803c.236-17.835.236-17.835 10.276-19.843l3.543-.709V5.65h-42.52v7.795l3.543.709c12.165 2.48 12.874 2.48 13.11 19.843l.354 24.803v31.89L452.609 5.65h-27.638zm-88.347-1.772c-33.071 0-59.055 24.449-59.055 59.528 0 34.37 25.039 57.402 57.165 57.402 33.071 0 59.055-24.449 59.055-59.528.001-34.371-25.039-57.402-57.165-57.402zm-.354 106.299c-23.031 0-38.15-19.252-38.15-48.543 0-29.055 14.764-47.126 36.969-47.126 23.031 0 38.15 19.252 38.15 48.543-.001 29.055-14.764 47.126-36.969 47.126zM146.467 5.65l-3.543 35.433h8.504l1.772-4.606c8.031-20.906 8.031-20.906 23.031-20.906h12.402v80.787c0 10.984 0 10.984-15.945 14.173l-3.543.709v7.795h56.693v-7.795l-3.543-.709c-15.945-3.189-15.945-3.189-15.945-14.173V15.571h12.402c15.709 0 15.709 0 22.323 21.969l1.063 3.543h8.504V5.65H146.467zm-139.606 0v7.795l3.543.709c11.339 2.244 11.339 2.244 11.339 12.756v70.866c0 10.039 0 10.039-13.465 12.756l-3.543.709v7.795h98.504l3.543-35.433h-8.504l-1.772 4.252c-8.504 20.551-8.504 20.551-23.031 20.551H49.38c-10.63 0-10.63 0-10.63-10.63V65.177h9.921c14.055 0 14.055 0 16.299 11.339l.709 3.543h7.795V41.083h-7.795l-.709 3.543c-2.126 10.63-2.126 10.63-16.299 10.63H38.75V15.571h31.181c16.772 0 16.772 0 22.323 18.425l1.063 3.543h8.504V5.65H6.861z" />
      </svg>
    </div>
    <div className="header__right">
      <svg viewBox="0 0 19.77 19.49">
        <path
          d="M18.47 4h-2.84A6.12 6.12 0 0 0 4.14 4H1.3A1.3 1.3 0 0 0 0 5.31v12.88a1.3 1.3 0 0 0 1.3 1.3h17.17a1.3 1.3 0 0 0 1.3-1.3V5.31A1.3 1.3 0 0 0 18.47 4zM9.88 1.3A4.82 4.82 0 0 1 14.2 4H5.56a4.82 4.82 0 0 1 4.32-2.7zm8.58 16.89H1.3V5.31h17.17v12.88z"
          fill="inherit"
        />
      </svg>
      <div className="header__price">
        0<span>SEK</span>
      </div>
    </div>
  </div>
);

const HeaderComponent = ({ menuOpen, openAndCloseMenu }) => (
  <div className="header">
    <div className={`header__dropdown-menu${menuOpen ? " is-open" : ""}`}>
      <div className="header__dropdown-menu-top">
        <HeaderTopComponent onClick={openAndCloseMenu} />
      </div>

      <div className="header__dropdown-menu-bottom">
        <div className="search-input">
          <input type="text" />
        </div>
        <NavigationComponent active="shirts" openMenu={{ openAndCloseMenu }} />
        <MenuComponent />
      </div>
    </div>
    <HeaderTopComponent onClick={() => {}} />
    <div className="header__bottom">
      <NavigationComponent openMenu={openAndCloseMenu} />
    </div>
  </div>
);

export default HeaderComponent;
