import React from "react";
import "./Header.scss";
import { useState } from "react";
import { Navigate } from "react-router-dom";

// image
import Logo from "../../images/logo.svg";
import StoreIcon from "../../images/icon/store.svg";
import HamburgerIcon from "../../images/icon/hamburger.svg";
import CloseIcon from "../../images/icon/close.svg";

const Header = () => {
    const [isHamburger, setIshamburger] = useState(false);

    const hamburgerHandler = () => {
        setIshamburger(!isHamburger);
    };

    return (
        <header>
            <div className="header-wrap">
                <img src={Logo} alt="header-logo" />
                <nav className={isHamburger ? "visible" : "invisible"}>
                    <img
                        className="hamburger-logo"
                        src={Logo}
                        alt="header-logo"
                    />
                    <ul>
                        <li>포인핸드 활동</li>
                        <li>입양 후기</li>
                        <li>유기동물 통계</li>
                        <li>포인핸드 후원</li>
                    </ul>
                    <div className="nav-right">
                        <img src={StoreIcon} />
                        포인핸드 스토어
                    </div>
                </nav>
                <img
                    className="hamburger"
                    src={isHamburger ? CloseIcon : HamburgerIcon}
                    alt={isHamburger ? "hamburger icon" : "close icon"}
                    onClick={() => {
                        hamburgerHandler();
                    }}
                />
            </div>
        </header>
    );
};

export default Header;
