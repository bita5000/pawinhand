// npm install webpack webpack-cli react react-dom
// 위 명령어를 실행하여 바벨을 사용할 때 일일이 설치했던 react.production, react-dom 어쩌구들을 프로젝트에 포함시킴(모듈시스템, npm사용)


// ESM 문법을 이용하여 필요한 모듈을 가져옴
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button.js';

function Container() {
    return React.createElement(
        'div',
        null,
        React.createElement('p', null, '버튼을 클릭해 주세요'),
        React.createElement(Button, { label: '좋아요' }),
        React.createElement(Button, { label: '싫어요' }),
    );
}
const domContainer = document.querySelector('#react-root');
ReactDOM.render(React.createElement(Container), domContainer);