import React, { FC } from 'react';
import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
import { CSSTransition } from "react-transition-group";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Sidebar: FC = () => {
  const isVisibleSidebar = useTypedSelector(state => state.app.isVisibleSidebar)

  return (
    <>
      <CSSTransition in={isVisibleSidebar} timeout={200} unmountOnExit>
        <div className="sidebar-background" />
      </CSSTransition>
      <CSSTransition in={isVisibleSidebar} timeout={200} unmountOnExit>
        <div className="sidebar sidebar-position">
          <nav className="sidebar-menu">
            <ul className="sidebar-menu__list">
              <li className="sidebar-menu__item">
                <NavLink activeClassName="sidebar-menu__item-link-active" to="/" exact>
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li className="sidebar-menu__item">
                <NavLink activeClassName="sidebar-menu__item-link-active" to="/management">
                  <span>User management</span>
                </NavLink>
              </li>
              <li className="sidebar-menu__item">
                <NavLink activeClassName="sidebar-menu__item-link-active" to="/documents">
                  <span>Documents</span>
                </NavLink>
              </li>
              <li className="sidebar-menu__item">
                <NavLink activeClassName="sidebar-menu__item-link-active" to="/statistics">
                  <span>Statistics</span>
                </NavLink>
              </li>
              <li className="sidebar-menu__item">
                <NavLink activeClassName="sidebar-menu__item-link-active" to="/settings">
                  <span>Settings</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </CSSTransition>
    </>
  )
}

export default Sidebar
