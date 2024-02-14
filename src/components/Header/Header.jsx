import React from "react";
import "./Header.scss";

// image
import Logo from "../../images/logo.svg";
import StoreIcon from "../../images/icon/store.svg";
import HamburgerIcon from "../../images/icon/hamburger.svg";

const Header = () => {
    return (
        <header>
            <div className="header-wrap">
                <img src={Logo} alt="header-logo" />
                <nav>
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
                    src={HamburgerIcon}
                    alt="hamburger icon"
                />
            </div>
        </header>
    );
};

export default Header;
