import React from "react";
import "./Footer.scss";

// image
import CounselIcon from "../../images/icon/counsel.svg";
import EmailIcon from "../../images/icon/email.svg";

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrap">
                <div className="contact">
                    <div>
                        <img src={CounselIcon} alt="counsel icon" />
                        02-1234-1234
                    </div>
                    <div>
                        <img src={EmailIcon} alt="email icon" />
                        Pawinhand@naver.com
                    </div>
                </div>
                <div className="company-info">
                    주식회사 포인핸드 | 대표자 이환희
                    <br />
                    사업자번호 322-87-00895 | 사업장 주소 서울특별시 마포구
                    대홍로 67(정신빌딩) 401호
                </div>
                <div className="copyright">
                    Ⓒ포인핸드 제공 | 데이터 출처 <span>농림축산식품부</span>
                    <br />
                    ⒸPawinhandteam all right reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;
