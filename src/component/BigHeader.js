import React from "react";
import styled, { keyframes } from "styled-components";

const BigHeader = ({ title, description, backgroundImage }) => {
  return (
    <HeaderContainer backgroundImage={backgroundImage}>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ArrowContainer>
        <Arrow />
      </ArrowContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  height: 100vh;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Title = styled.h1`
  color: white;
  font-size: 48px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin: 0;
`;

const Description = styled.p`
  color: white;
  font-size: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  margin: 0;
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const ArrowContainer = styled.div`
  position: absolute;
  bottom: 20px;
`;

const Arrow = styled.div`
  width: 30px;
  height: 30px;
  border-left: 4px solid white;
  border-bottom: 4px solid white;
  transform: translate3d(-50%, -50%, 0);
  transform: rotate(45deg);
  animation: ${bounce} 2s infinite;
`;

export default BigHeader;