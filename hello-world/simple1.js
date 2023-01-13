// 좋아요 버튼을 보여 주는 리액트 컴포넌트
function LikeButton() {
    const [liked, setLiked] = React.useState(false);
    const text = liked ? "좋아요 취소" : "좋아요";

    // 문법은 아래 설명 참고
    // ** 해당 함수는 리액트 요소를 반환한다.
    // 여기서 생성한 리액트 요소는 최종적으로 버튼 돔 요소가 된다.
    return React.createElement(
        'button',

        // ** 생성한 버튼을 클릭하면 onClick 함수가 호출되고 컴포넌트의 상탯값이 변경된다.
        { onClick: () => setLiked(!liked) },
        text,
    );
}

// ** simple1.html 파일에 미리 만들어 두었던 돔 요소를 가져온다.
const domContainer = document.querySelector('#react-root');

// ** react-dom.development.js 파일에서 전역 변수로 만든 ReactDOM 변수를 사용해 만든 컴포넌트를 react-root 돔 요소에 붙인다.
ReactDOM.render(React.createElement(LikeButton), domContainer);

// createElement function (보통은 바벨의 도움을 받아 JSX 문법을 사용하여 작성한다)

{/* 
- 일반적인 HTML 코드
<div>
    <p>hello</p>
    <p>world</p>
</div>

- 같은 코드를 createElement 함수를 사용해서 작성함
createElement(
    'div',
    null,
    createElement('p', null, 'hello'),
    createElement('p', null, 'world'),
) 

*/}