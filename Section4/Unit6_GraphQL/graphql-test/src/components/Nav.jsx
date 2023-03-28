import React from "react";
import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 1rem;
`;

const NavItems = styled.ul`
  display: flex;
  list-style-type: none;
  color: white;
`;

const NavItem = styled.li`
  margin-left: 1rem;
`;

const NavLink = styled.div`
  color: white;
  text-decoration: none;
  &:hover {
    color: #ccc;
  }
`;

function Nav({ soulhn }) {
  return (
    <Navbar>
      <NavItems>
        <NavItem>로그인 한 사람 : {soulhn}</NavItem>
        <NavItem>
          <NavLink>Test 1</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Test 2</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Test 3</NavLink>
        </NavItem>
      </NavItems>
    </Navbar>
  );
}

export default Nav;
