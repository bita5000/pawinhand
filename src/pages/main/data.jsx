import RescueIcon from "../../images/icon/rescue.svg";
import HeartIcon from "../../images/icon/heart.svg";
import BrokenHeartIcon from "../../images/icon/broken-heart.svg";

import History1 from "../../images/history1.png";
import History2 from "../../images/history2.png";
import History3 from "../../images/history3.png";

import Store1 from "../../images/store1.png";
import Store2 from "../../images/store2.png";
import Store3 from "../../images/store3.png";
import Store4 from "../../images/store4.png";
import Store5 from "../../images/store5.png";
import Store6 from "../../images/store6.png";
import Store7 from "../../images/store7.png";
import Store8 from "../../images/store8.png";

import Sns1 from "../../images/sns1.png";
import Sns2 from "../../images/sns2.png";
import Sns3 from "../../images/sns3.png";
import Sns4 from "../../images/sns4.png";
import Sns5 from "../../images/sns5.png";

const data = {
    rescueStatus: [
        {
            id: 0,
            img: RescueIcon,
            title: "구조된 동물",
            qty: "149",
            unit: "마리"
        },
        { id: 1, img: HeartIcon, title: "입양률", qty: "12", unit: "%" },
        {
            id: 2,
            img: BrokenHeartIcon,
            title: "안락사율",
            qty: "2",
            unit: "%"
        }
    ],
    history: [
        {
            id: 0,
            img: History1,
            title: "유기동물 입양 플랫폼 운영",
            subtitle:
                "전국 보호소의 유기동물을 입양할 수 있는 플랫폼을 운영합니다"
        },
        {
            id: 1,
            img: History2,
            title: "유기동물 건강검진 지원",
            subtitle: "입양된 유기동물의 건강검진을 지원합니다"
        },
        {
            id: 2,
            img: History3,
            title: "포인핸드 매거진",
            subtitle: "입양문화를 발전시키는 매거진을 발행합니다"
        }
    ],
    store: [
        {
            id: 0,
            img: Store1,
            productName: "[유기동물 후원] 포인핸드 반려동물 입양 수첩",
            discountRate: "",
            price: "10,000",
            cost: "",
            star: "4.6",
            review: "15"
        },
        {
            id: 1,
            img: Store2,
            productName: "[유기동물 후원] 믹스패밀리 페이스 에폭시 그립톡",
            discountRate: "",
            price: "15,000",
            cost: "",
            star: "4.8",
            review: "46"
        },
        {
            id: 2,
            img: Store3,
            productName: "[유기동물 후원] 포인핸드 로고 아크릴 키링",
            discountRate: "10%",
            price: "8,100",
            cost: "9,000원",
            star: "5.0",
            review: "2"
        },

        {
            id: 3,
            img: Store4,
            productName: "[유기동물 후원] 길 위의 고양이 뱃지",
            discountRate: "",
            price: "7,000",
            cost: "",
            star: "4.9",
            review: "173"
        },
        {
            id: 6,
            img: Store7,
            productName: "[유기동물 후원] 포인핸드 척척방석 강아지방석",
            discountRate: "9%",
            price: "49,000",
            cost: "54,000원",
            star: "324",
            review: "4.9"
        },
        {
            id: 4,
            img: Store5,
            productName: "[유기동물 후원] 포인핸드 매거진 18호",
            discountRate: "",
            price: "15,000",
            cost: "",
            star: "5.0",
            review: "2"
        },
        {
            id: 5,
            img: Store6,
            productName: "[유기동물 후원] 포인핸드 슬로건 마스킹 테이프",
            discountRate: "10%",
            price: "4,500",
            cost: "5,000원",
            star: "4.9",
            review: "13"
        },
        {
            id: 9,
            img: Store8,
            productName: "[유기동물 후원] 포인핸드 로고 머그컵",
            discountRate: "",
            price: "15,000",
            cost: "",
            star: "4.9",
            review: "7"
        }
    ],
    sns: [
        { id: 0, img: Sns1 },
        { id: 1, img: Sns2 },
        { id: 2, img: Sns3 },
        { id: 3, img: Sns4 },
        { id: 4, img: Sns5 }
    ]
};

export default data;
