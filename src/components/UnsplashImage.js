import React from 'react';
import styled from 'styled-components';

const Row = styled.div`
display: flex;
align-items: center;
`;

const Column = styled.div`
flex: 50%;
text-align: center;
`;

const Img = styled.img`
width:200px;
margin: 1em auto;
display: block;
`;

function UnsplashImage({ url, key, author, created }) {
    return (
        <Row>
            <Column>
                <Img src={url} key={key} alt="photo" />
            </Column>
            <Column>
                <p>Author: {author}</p>
                <p>Created at: {created}</p>
            </Column>
        </Row>
    )
}

export default UnsplashImage;
