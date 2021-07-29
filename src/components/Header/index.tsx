import React, { FC } from 'react';
import './Header.scss';
import Input from "../Input";
import logo from "../../icons/logo.svg";
import { Link } from "react-router-dom";
import hamburger from "../../icons/bars.svg";
import { useDispatch } from "react-redux";
import { switchVisibilitySidebar } from "../../redux/ducks/app";

const Header: FC = () => {
  const dispatch = useDispatch()

  const hideSidebarHandler = () => {
    dispatch(switchVisibilitySidebar())
  }

  return (
    <>
      <div className="header-background" />
      <header className="header header-position">
        <img
          className="header__hamburger"
          src={hamburger}
          alt="hamburger"
          onClick={hideSidebarHandler}
        />
        <Link to="/" className="header__logo">
          <img src={logo} alt="logo" />
          <div className="header__logo-name">
            <span>Company name</span>
          </div>
        </Link>
        <div className="header__title">Dashboard overview</div>
        <form className="header__form">
          <Input placeholder="Search all..." />
        </form>
        <div className="header__help">
          <a href="/#">Help guides</a>
        </div>
        <div className="header__inbox">
          <a href="/#">Inbox</a>
        </div>
        <div className="header__button">
          <button className="button">
            Download client
          </button>
        </div>
        <div className="header__avatar">
          <div />
        </div>
      </header>
    </>
  )
}

export default Header;
