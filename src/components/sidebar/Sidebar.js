import React from "react";
import "./sidebar.css";

import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowMobileMenu } from "../../store/settings/settingsSlice";
const Sidebar = () => {
  const showMobileMenu = useSelector((state) => state.settings.showMobileMenu);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={`devHire-siderbar ${showMobileMenu && "showMenu"}`}>
        <div className="dashboard_logo">
          <Link to="/">
            Dev<span>Hire</span>
          </Link>
        </div>
        <div className="devHire-siderbar-scroll">
          <ul className="metismenu" id="menu">
            <li>
              <NavLink to="/" className="has-arrow">
                <i className="bx bx-search"></i>
                <span className="nav-text">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/favourites" className="has-arrow">
                <i className="bx bx-heart"></i>
                <span className="nav-text">Favorites</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div
        onClick={() => dispatch(setShowMobileMenu(false))}
        className={`devHire-sidebar-overlay ${showMobileMenu && "showMenu"}`}
      ></div>
    </div>
  );
};

export default Sidebar;
