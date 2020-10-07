import React, { useState } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { getDifferenceYear, calcBrand, calcPlan } from "../Helpers";

const ContainerField = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const ContainerLabel = styled.label`
  flex: 0 0 100px;
`;
const ContainerSelect = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
`;

const ContainerInputRadio = styled.input`
  margin: 0 1rem;
`;

const ContainerButton = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;

  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;

const ContainerError = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = ({ setResume, setCharging }) => {
  const [data, setData] = useState({
    brand: "",
    year: "",
    plan: "",
  });
  const [error, setError] = useState(false);

  //extrac values from the state
  const { brand, year, plan } = data;

  //Read the data form the from and set up in the state
  const getData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  //when the user click submit
  const priceInsurance = (e) => {
    e.preventDefault();

    if (brand.trim() === "" || year.trim() === "" || plan.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    //base 2000
    let result = 2000;

    //to get the difference between years
    const difference = getDifferenceYear(year);
    // console.log(difference)

    //every year rest 30%
    result -= (difference * 3 * result) / 100;
    // console.log(result)

    //American 15%
    //Asian 5%
    //European 30%
    result = calcBrand(brand) * result;
    // console.log(result)

    //Basic increase 20%
    //Complete 50%
    const increasePlan = calcPlan(plan);
    result = parseFloat(increasePlan * result).toFixed(2);
    // console.log(result);

    setCharging(true);
    setTimeout(() => {
      //delete the spinner
      setCharging(false);
      setResume({
        price: Number(result),
        data,
      });
    }, 2000);
  };

  return (
    <form onSubmit={priceInsurance}>
      {error ? <ContainerError>All the data is required</ContainerError> : null}
      <ContainerField>
        <ContainerLabel>Brand</ContainerLabel>
        <ContainerSelect name="brand" value={brand} onChange={getData}>
          <option value="">-- Select Option --</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </ContainerSelect>
      </ContainerField>
      <ContainerField>
        <ContainerLabel>Year</ContainerLabel>
        <ContainerSelect name="year" value={year} onChange={getData}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </ContainerSelect>
      </ContainerField>
      <ContainerField>
        <ContainerLabel>Plan</ContainerLabel>
        <ContainerInputRadio
          type="radio"
          name="plan"
          value="basic"
          checked={plan === "basic"}
          onChange={getData}
        />
        Basic
        <ContainerInputRadio
          type="radio"
          name="plan"
          value="complete"
          checked={plan === "complete"}
          onChange={getData}
        />
        Complete
      </ContainerField>
      <ContainerButton type="submit">Price</ContainerButton>
    </form>
  );
};

Form.propTypes = {
  setResume: PropTypes.func.isRequired,
  setCharging: PropTypes.func.isRequired,
};
export default Form;
