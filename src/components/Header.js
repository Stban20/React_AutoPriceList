import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ContainerHeader = styled.header`
  background-color: #26c6da;
  padding: 10px;
  font-weight: bold;
  color: #ffffff;
`;

const ContainerH1 = styled.h1`
  font-size: 2rem;
  margin: 0;
  font-family: "Slabo 27px", serif;
  text-align: center;
`;

const Header = ({ title }) => {
  return (
    <ContainerHeader>
      <ContainerH1>{title}</ContainerH1>
    </ContainerHeader>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
