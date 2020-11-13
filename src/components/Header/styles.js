import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: var(--darkGrey);
    padding: 0 20px;
    border-bottom: 0.7px solid var(--white);
    -webkit-box-shadow: 0px 11px 30px 3px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 11px 30px 3px rgba(0,0,0,0.75);
    box-shadow: 0px 11px 30px 3px rgba(0,0,0,0.75);
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
`;

const LogoImg = styled.img`
    width: 200px;
    transition: width 1s;

    @media screen and (max-width: 500px) {
        width: 150px;
    }
`;

const TMDBLogoImg = styled.img`
    width: 100px;
    transition: width 1s;
    
    @media screen and (max-width: 500px) {
        width: 80px;
    }
`;

export {
    Wrapper,
    Content,
    LogoImg,
    TMDBLogoImg
}