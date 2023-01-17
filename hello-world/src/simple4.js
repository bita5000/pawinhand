// 아래가 JSX로 작성된 코드
// 이 코드는 JS 표준이 아니기 때문에 그대로 사용하면 에러가 발생함
// 패키지를 설치하여 사용이 가능함
// npm install @babel/core @babel/cli @babel/preset-react
// JSX 문법으로 작성된 해당 파일을 createElement 함수로 작성된 파일로 변환함

// 설치된 바벨 패키지를 이용해 자바스크립트 파일을 변환할 수 있다.
// npx babel --watch src --out-dir . --presets @babel/preset-react
// 위 명령어를 실행하면 src 폴더에 있는 모든 js 파일을 @babel/preset-react 프리셋을 이용해 변환 후 현재 폴더에 같은 이름의 js 파일을 생성한다.
// watch 모드로 실행했기 때문에 src 폴더의 js 파일을 수정할 때마다 자동으로 변환/저장한다.

function Container() {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <LikeButton />
            <div style={{ marginTop: 20 }}>
                <span>현재 카운트: </span>
                <span>{count}</span>
                <button onClick={() => setCount(count + 1)}>증가</button>
                <button onClick={() => setCount(count - 1)}>감소</button>
            </div>
        </div>
    );
}