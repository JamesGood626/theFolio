import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Need to update
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 0;
  right: 0;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 100;
  height: 7rem;
  padding: 0 1rem;
  width: 90%;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  list-style: none;
  width: 24rem;
  height: 100%;
  font-size: 1rem;

  @media screen and (min-width: 742px) {
    width: 30rem;
  }
`;

const Li = styled.li`
  color: #828489;

  &:hover {
    color: #35e0f0;
  }

  @media screen and (min-width: 742px) {
    font-size: 1.4rem;
  }
`;

const navbar = ({ location, menuItems, homeRouteStyle }) => {
  const active = {
    color: "#274156"
  };
  return (
    <Div style={homeRouteStyle}>
      <Ul>
        {menuItems.map((menuItem, i) => {
          return (
            <Link
              key={menuItem.name}
              style={{ textDecoration: "none" }}
              to={menuItem.path}
            >
              <Li
                tabIndex={i}
                style={menuItem.path === location.pathname ? active : null}
              >
                {menuItem.name}
              </Li>
            </Link>
          );
        })}
      </Ul>
    </Div>
  );
};

export default navbar;
