import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = ({ className }) => {
  return (
    <div className={className}>
      <PageTitle>hallucination</PageTitle>
      <LinkGroup>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Menu">Menu</NavLink>
        <NavLink to="/form">form</NavLink>
      </LinkGroup>
    </div>
  );
};

const PageTitle = styled.p`
  align-content: center;
  margin-left: 10px;
  font-size: 20px;
  color: #873e23;
`;

const LinkGroup = styled.div`
  align-content: center;
  margin-right: 20px;
`;

const NavLink = styled(Link)`
  padding: 20px;
  color: white;
  text-decoration: none;
  &:hover {
    color: white;
    background: rgba(226, 135, 67, 0.8);
    border-radius: 5px;
    box-shadow:0 0 20px 10px rgba(226, 135, 67, 0.8);
  }
`;

export default styled(Navbar)`
  background: rgba(255, 255, 255, 0.1); /* 半透明效果 */
  backdrop-filter: blur(10px); /* 毛玻璃效果 */
  position: fixed; /* 固定在頁面頂部 */
  width: 90%;
  height: 58px;
  display: flex;
  justify-content: space-between;
  z-index: 1000; /* 確保導覽列在最上層 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 添加陰影提升層次感 */
  top: 20px;
  left: 5%;
  right: 5%;
  border-radius: 20px;
`;
