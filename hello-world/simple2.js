// 좋아요 버튼을 보여 주는 리액트 컴포넌트
function LikeButton() {
    const [liked, setLiked] = React.useState(false);
    const text = liked ? "좋아요 취소" : "좋아요";
    return React.createElement(
        'button',
        { onClick: () => setLiked(!liked) },
        text,
    );
}

const domContainer = document.querySelector('#react-root');

ReactDOM.render(
    React.createElement(LikeButton),
    document.querySelector('#react-root1'),
);
ReactDOM.render(
    React.createElement(LikeButton),
    document.querySelector('#react-root2'),
);
ReactDOM.render(
    React.createElement(LikeButton),
    document.querySelector('#react-root3'),
);
