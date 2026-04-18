import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const [isProfileDropdownOpen , setIsProfileDropdownOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />

      <div className="menus">
        <ul>

          <li>
            <NavLink to="/" className={({isActive}) => isActive ? activeMenuClass : menuClass}>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/orders" className={({isActive}) => isActive ? activeMenuClass : menuClass}>
              Orders
            </NavLink>
          </li>

          <li>
            <NavLink to="/holdings" className={({isActive}) => isActive ? activeMenuClass : menuClass}>
              Holdings
            </NavLink>
          </li>

          <li>
            <NavLink to="/positions" className={({isActive}) => isActive ? activeMenuClass : menuClass}>
              Positions
            </NavLink>
          </li>

          <li>
            <NavLink to="/funds" className={({isActive}) => isActive ? activeMenuClass : menuClass}>
              Funds
            </NavLink>
          </li>
        </ul>

        <hr />

        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>

        {isProfileDropdownOpen && <div>Dropdown</div>}

      </div>
    </div>
  );
};

export default Menu;