import React from 'react';

export default function Button(props) {
    return React.createElement('button', null, props.label);
}

// 웹팩을 사용하여 두 파일을 하나로 합칠 수 있다 (명령어 npx webpack)