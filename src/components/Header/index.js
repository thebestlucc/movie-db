import React from 'react';
import RMDBLogo from '../../assets/images/react-movie-logo.svg';
import TMDBLogo from '../../assets/images/tmdb_logo.svg';

import { Content, LogoImg, TMDBLogoImg, Wrapper } from './styles';

export default function Header () {
    return (
        <Wrapper>
            <Content>
                <LogoImg src={ RMDBLogo } alt="rmdb-logo" />
                <TMDBLogoImg src={ TMDBLogo } alt="tmdb-logo"/>
            </Content>
        </Wrapper>
    );
}