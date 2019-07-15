import React from "react";

const MenuList = ({ styleClass, list: { header, list } }) => (
  <div className={styleClass}>
    {header && <h4>{header}</h4>}
    {list && list.map(({ link, linkText }) => <a href={link}>{linkText}</a>)}
  </div>
);

const MenuComponent = _ => (
  <div className="menu">
    <MenuList
      styleClass="menu-list width-50"
      list={{
        header: "Body fit",
        list: [
          { link: "", linkText: "Super Slim" },
          { link: "", linkText: "Slim" },
          { link: "", linkText: "Contemporary" },
          { link: "", linkText: "Classic" },
          { link: "", linkText: "Extra Long Sleeve" }
        ]
      }}
    />
    <div className="width-50">
      <MenuList
        styleClass="menu-list"
        list={{
          list: [
            { link: "", linkText: "All Shirts" },
            { link: "", linkText: "New Arrivals" },
            { link: "", linkText: "White Shirts" },
            { link: "", linkText: "Outlet" }
          ]
        }}
      />
      <MenuList
        styleClass="menu-list"
        list={{
          list: [
            { link: "", linkText: "Size Guide" },
            { link: "", linkText: "Eton Express" }
          ]
        }}
      />
    </div>
    <MenuList
      styleClass="menu-list width-50"
      list={{
        header: "Collection",
        list: [
          { link: "", linkText: "Red Ribbon" },
          { link: "", linkText: "Green Ribbon" },
          { link: "", linkText: "Black Ribbon" }
        ]
      }}
    />
  </div>
);

export default MenuComponent;
