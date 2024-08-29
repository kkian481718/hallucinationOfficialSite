import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FootBox>
      <Foot>© 2024-2025 Miffy Studio</Foot>
    </FootBox>
  );
};

const FootBox = styled.div`
  top: 0;
  background-color: #222;
  height: 50px;
`;

const Foot = styled.p`
  color: #7a7a7a;
`;

export default Footer;
