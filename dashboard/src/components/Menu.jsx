import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const LOGIN_URL = import.meta.env.VITE_LOGIN_URL;

const Menu = () => {
  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const handleLogout = async () => {
    try {
      await axios.post(
        `${API_URL}/auth/logout`,
        {},
        { withCredentials: true }
      );
    } catch (error) {
      console.error("Logout failed", error);
    } finally {
      window.location.href = LOGIN_URL;
    }
  };

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />

      <div className="menus">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? activeMenuClass : menuClass}>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/orders" className={({ isActive }) => isActive ? activeMenuClass : menuClass}>
              Orders
            </NavLink>
          </li>

          <li>
            <NavLink to="/holdings" className={({ isActive }) => isActive ? activeMenuClass : menuClass}>
              Holdings
            </NavLink>
          </li>

          <li>
            <NavLink to="/positions" className={({ isActive }) => isActive ? activeMenuClass : menuClass}>
              Positions
            </NavLink>
          </li>

          <li>
            <NavLink to="/funds" className={({ isActive }) => isActive ? activeMenuClass : menuClass}>
              Funds
            </NavLink>
          </li>
        </ul>

        <hr />

        <div className="profile-actions">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
