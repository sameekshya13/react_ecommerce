import React from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Newest Collection</h1>
      <div className="menuList">
        {MenuList.slice(0, 12).map((menuItem, key) => { // Limit to 12 items
          return (
            <MenuItem
              key={key}
              id={key}  
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
