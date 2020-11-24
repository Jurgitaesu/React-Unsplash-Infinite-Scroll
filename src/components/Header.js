import React from 'react'
import styled from 'styled-components';

const HeaderWrap = styled.header`
max-width: 70em;
margin: 2.5em auto;
text-align: center;
font-family: sans-serif;

>p{
font-size: 1.2em;
}
`;

function Header() {
    return (
        <HeaderWrap>
            <h1>Unsplash image gallery</h1>
            <p>Infinite image scroll experience using Unsplash API and ReactJS</p>
        </HeaderWrap>
    )
}

export default Header;
