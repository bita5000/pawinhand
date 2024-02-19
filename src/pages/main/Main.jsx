import React, { useEffect, useState } from "react";
import "./Main.scss";
import "../../styles/global.scss";

// image
import MainBoardImg from "../../images/main-board.png";
import BellIcon from "../../images/icon/bell.svg";
import Arrow1Right from "../../images/icon/arrow/right1.svg";
import EventBoard from "../../images/event-board.png";
import CalendarIcon from "../../images/icon/calendar.svg";
import PointerIcon from "../../images/icon/pointer.svg";
import Arrow2Left from "../../images/icon/arrow/left2.svg";
import Arrow2Right from "../../images/icon/arrow/right2.svg";
import StarIcon from "../../images/icon/star.svg";
import donationBanner from "../../images/donation-banner.png";
import DownloadAppStore from "../../images/download-appstore.svg";
import DownloadGooglePlay from "../../images/download-googlePlay.svg";
import PawinhandApp from "../../images/pawinhand-app.svg";

import data from "./data.jsx";

const Main = () => {
    const [storeCurrentIndex, setStoreCurrentIndex] = useState(0);
    const [currentHistory, setCurrentHistory] = useState(0);
    const [imageVisible, setImageVisible] = useState(false);
    const [storeWrapPosition, setStoreWrapPosition] = useState(0);
    const [storeArr, setStoreArr] = useState([
        data.store.length - 1,
        0,
        1,
        2,
        3,
        4
    ]);

    const TOTAL_RESCUE_COUNT = 68724;
    const TOTAL_DONATION_AMOUNT = 10962709;

    // history slider
    useEffect(() => {
        setImageVisible(true);
        const intervalHistory = setInterval(() => {
            setCurrentHistory(
                (currentHistory) => (currentHistory + 1) % data.history.length
            );
        }, 3500);

        return () => clearInterval(intervalHistory);
    }, []);

    const historyHandler = (index) => {
        setCurrentHistory(index);
    };

    // 1. 페이지로딩완료시 6개의 배열을 미리 랜딩함
    // 2. 화살표의 명령이 들어오면 배열을 일단 변경부터..

    // store slider
    const selectedStoreData = storeArr.map((index) => data.store[index]);

    const handleArrowClick = (increment) => {
        if (increment === +1) {
            setStoreCurrentIndex(storeCurrentIndex + 1);
        } else {
            setStoreCurrentIndex(storeCurrentIndex - 1);
        }

        const newStoreArr = storeArr.map(
            (index) =>
                (index + increment + data.store.length) % data.store.length
        );
        setStoreArr(newStoreArr);
    };

    // counter
    const easeOutExpo = (t) => {
        return t === 1 ? 1 : 1 - Math.pow(10, -10 * t);
    };

    const useCountUp = (num, duration) => {
        const [count, setCount] = useState(0);
        const frameRate = 1000 / 60;
        const totalFrame = Math.round(duration / frameRate);

        useEffect(() => {
            let currentNumber = 0;

            const counter = setInterval(() => {
                const progressRate = easeOutExpo(++currentNumber / totalFrame);
                setCount(Math.round(num * progressRate));

                if (progressRate === 1) {
                    clearInterval(counter);
                }
            }, frameRate);
        }, []);

        return count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <main>
            {/* intro */}
            <section className="intro">
                <div className="intro-wrap">
                    <article
                        className="intro-main-board"
                        style={{
                            backgroundImage: `url(${MainBoardImg})`
                        }}
                    >
                        <h2>포인핸드를 통해 가족을 찾은 유기동물의 수</h2>
                        <h3>{useCountUp(TOTAL_RESCUE_COUNT, 7000)}</h3>
                    </article>
                    <div className="bottom-board-wrap">
                        <article className="intro-event-board">
                            <div className="title">
                                <img src={BellIcon} alt="bell icon" />
                                <span>새로운 소식</span>
                                <span>펀딩</span>
                            </div>
                            <div className="event-board-contents-wrap">
                                <div className="event-board-contents">
                                    <h3>품종 없이도 충분히 사랑스러운</h3>
                                    <h2>포인핸드 매거진 18호</h2>
                                    <div className="button">
                                        확인하기
                                        <img
                                            src={Arrow1Right}
                                            alt="move icon arrow-right"
                                        />
                                    </div>
                                </div>
                                <img
                                    className="event-board-img"
                                    src={EventBoard}
                                    alt="event board image cute dog"
                                />
                            </div>
                        </article>
                        <article className="intro-rescue-board">
                            <div className="title">
                                <img src={CalendarIcon} alt="date icon" />
                                오늘의 포인핸드 활동 현황
                            </div>
                            {data.rescueStatus.map((item) => {
                                return (
                                    <div
                                        className="rescue-contents"
                                        key={item.id}
                                    >
                                        <div>
                                            <img
                                                src={item.img}
                                                alt="rescue icon"
                                            />
                                            <div>{item.title}</div>
                                        </div>
                                        <div>
                                            <span>
                                                {useCountUp(item.qty, 17000)}
                                            </span>
                                            <div>{item.unit}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </article>
                    </div>
                </div>
            </section>

            {/* ----------- history ----------- */}
            <section className="history">
                <div className="title-wrap">
                    <h2>
                        2018년부터 시작된
                        <br />
                        포인핸드의 활동을 소개할게요
                    </h2>
                    <div className="history-title-object">
                        <img src={PointerIcon} alt="pointer icon" />
                        사진을 클릭하면 포인핸드 활동 페이지로 이동해요
                    </div>
                </div>
                <div
                    className="history-card-wrap"
                    style={{
                        opacity: imageVisible ? 1 : 0.7,
                        transition: "opacity 0.3s ease-in-out"
                    }}
                >
                    {data.history.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className={`item ${
                                    currentHistory === item.id
                                        ? "history-card"
                                        : "hide-display"
                                }`}
                                style={{
                                    backgroundImage: `url(${item.img})`
                                }}
                            >
                                <div>
                                    {Array.from(
                                        { length: data.history.length },
                                        (_, currentHistory) => (
                                            <div
                                                key={currentHistory}
                                                onClick={() => {
                                                    historyHandler(
                                                        currentHistory
                                                    );
                                                }}
                                            >
                                                <span
                                                    className={`item ${
                                                        currentHistory ===
                                                        item.id
                                                            ? "visible-dot"
                                                            : "hidden-dot"
                                                    }`}
                                                ></span>
                                            </div>
                                        )
                                    )}
                                </div>
                                <h2>{item.title}</h2>
                                <h3>{item.subtitle}</h3>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ----------- store ----------- */}
            <section className="store">
                <div className="title-wrap">
                    <h2>
                        유기동물과 함께 나누는
                        <br />
                        포인핸드 스토어
                    </h2>
                    <div className="store-title-object">
                        <img
                            src={Arrow2Left}
                            onClick={() => handleArrowClick(-1)}
                            alt="left icon"
                        />
                        <img
                            src={Arrow2Right}
                            onClick={() => handleArrowClick(+1)}
                            alt="right icon"
                        />
                    </div>
                </div>
                <div
                    className="store-wrap"
                    style={{
                        transform: `translate(${-storeCurrentIndex * 304}px, 0)`
                    }}
                >
                    {selectedStoreData.map((item) => {
                        return (
                            <div
                                className="store-card"
                                key={item.id}
                                style={{
                                    transform: `translate(${
                                        storeCurrentIndex * 304
                                    }px, 0)`
                                }}
                            >
                                <div className="img-wrap">
                                    <img src={item.img} alt="store image" />
                                </div>

                                <h2>{item.productName}</h2>
                                <div className="price-info">
                                    <strong>{item.discountRate}</strong>
                                    {item.price}
                                    <span>원</span>
                                    <small>{item.cost}</small>
                                </div>
                                <div className="review-info">
                                    <img src={StarIcon} alt="star icon" />
                                    {item.star} · 리뷰 {item.review}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className="donation-banner">
                <div
                    className="donation-banner-wrap"
                    style={{
                        backgroundImage: `url(${donationBanner})`
                    }}
                >
                    <h3>포인핸드를 통해 쌓인 후원 금액</h3>
                    <h2>
                        {useCountUp(TOTAL_DONATION_AMOUNT, 7000)}

                        <span>원</span>
                    </h2>
                    <p>
                        포인핸드 스토어 수익금은 유기동물 후원 및<br />
                        유기동물 입양 문화 조성을 위한 포인핸드 활동에
                        사용됩니다.
                    </p>
                </div>
            </section>

            {/* ----------- sns ----------- */}
            <section className="sns">
                <div className="title-wrap">
                    <h2>
                        포인핸드 인스타그램에서
                        <br />
                        다양한 소식을 확인하세요
                    </h2>
                </div>
                <span>@pawinhnad_official</span>
                <div className="sns-img-wrap">
                    {data.sns.map((item) => {
                        return (
                            <div key={item.id}>
                                <img src={item.img} alt="instagram image" />
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* ----------- download ----------- */}
            <section className="download">
                <div className="title-wrap">
                    <h2>
                        포인핸드 어플을 통해
                        <br />
                        유기동물의 소식을 만나보세요
                    </h2>
                </div>
                <div className="download-background">
                    <div className="download-wrap">
                        <div>
                            <img src={PawinhandApp} alt="pawinhand icon" />
                            Download
                        </div>
                        <div>
                            <img
                                src={DownloadAppStore}
                                alt="app store download icon"
                            />
                            <img
                                src={DownloadGooglePlay}
                                alt="google play download icon"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <hr />
        </main>
    );
};

export default Main;
