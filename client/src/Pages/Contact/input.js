import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 300;
`;

const Label = styled.label`
  color: #274156;
  position: relative;
  top: 1.25rem;
  font-size: 0.8rem;

  @media screen and (min-width: 742px) {
    font-size: 1rem;
  }
`;

const StyledInput = styled.input`
  position: relative;
  margin-top: 1.875rem;
  margin-bottom: 1.5rem;
  width: 75vw;
  height: 2.5rem;
  background-color: rgba(0, 0, 0, 0);
  padding: 0.625rem;
  border: 1px solid #274156;
  box-shadow: 2px #777;
  transition: border 0.1s;
  color: #274156;
  border-radius: 0;

  @media (min-width: 500px) {
    width: 18.75rem;
  }

  &:focus {
    outline: none;
    border-bottom: solid 1px #35e0f0;
    border-left: solid 1px #35e0f0;
    border-right: solid 1px #35e0f0;
    border-top: solid 1px #35e0f0;
  }
`;

const FormError = styled.div`
  color: #d40000;
  margin-top: -20px;
  margin-bottom: 20px;
`;

const Input = ({ input, label, name, meta: { error, touched } }) => {
  return (
    <Section>
      <Label>{label}</Label>
      <StyledInput {...input} />
      <FormError>{touched && error}</FormError>
    </Section>
  );
};

export default Input;
