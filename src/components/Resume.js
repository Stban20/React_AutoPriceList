import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { changeUpperCase } from "../Helpers";

const ContainerResume = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;
const Resume = ({ data }) => {
  const { brand, year, plan } = data;

  if (brand === "" || year === "" || plan === "") return null;

  return (
    <ContainerResume>
      <h2>Resume of Price List</h2>
      <ul>
        <li>Brand: {changeUpperCase(brand)} </li>
        <li>Year: {year}</li>
        <li>Plan: {changeUpperCase(plan)}</li>
      </ul>
    </ContainerResume>
  );
};

Resume.propTypes = {
  data: PropTypes.object.isRequired,
};
export default Resume;
