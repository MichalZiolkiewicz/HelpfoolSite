import React, { useContext } from 'react';
import styled from "styled-components";

import arrow from '../images/arrowWhite.png';
import {AppContext} from "../context/AppContext";

const BackButton = styled.div`
  height: 4rem;
  width: 4rem;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background-color: #b2bec3;
  border-radius: 25px;
  display: ${props => props.isVisible ? 'flex' : 'none'};
  align-items: center;
  transition: .3s;
  opacity: .7;
  
  &:hover{
    transform: scale(1.1);
  }
`

const Icon = styled.div`
  transform: rotate(180deg);
  display: inline;
  background-image: url(${arrow});
  background-size: contain;
  background-repeat: no-repeat;
  height: 3rem;
  width: 3rem;
  margin: 0 auto;
`

const BackToTop = () => {

    const { handleBackToTop, scrollVisible } = useContext(AppContext);

    return(
        <BackButton onClick={handleBackToTop} isVisible={scrollVisible}>
            <Icon/>
        </BackButton>
    );
}

export default BackToTop;