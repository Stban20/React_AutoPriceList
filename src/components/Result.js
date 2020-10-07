import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
const ContainerPharragrafMessage = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ContainerPrice = styled.div`
  text-align: center;
  padding: 0.5rem;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;
const ContainerPharragrafTotal = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Result = ({ price }) => {
  return price === 0 ? (
    <ContainerPharragrafMessage>
      Choose brand, year and type of insurance
    </ContainerPharragrafMessage>
  ) : (
    <ContainerPrice>
      <TransitionGroup
        component='p'
        className='resultado'
      >
        <CSSTransition
            classNames='resultado'
            key={price}
            timeout={{ enter: 500, exit: 500}}
        >
          <ContainerPharragrafTotal>
            The Total is: ${price}
          </ContainerPharragrafTotal>
        </CSSTransition>
      </TransitionGroup>
    </ContainerPrice>
  );
};

Result.propTypes = {
    price: PropTypes.number.isRequired,
  };

export default Result;
