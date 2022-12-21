import { checkPropTypes } from "prop-types";
import React from "react";
import styled from "styled-components";

// beginning styles for building out our "links"... feel free to edit!
// good website for finding (and checking accessibility!) of colors: https://coolors.co/contrast-checker/112a46-acc8e5
const StyledButton = styled.button`
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: rgba(183, 231, 250, 0.8);
  width: 300px;
  border-radius: 24px;
  border-color: slateblue;
  padding: 6px;
  gap: 16px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: rgb(0, 0, 63);
  &hover: {
    cursor: pointer;
    background-color: lightblue;
  }
`;

const StyledA = styled.a`
  text-decoration: none;
`;

// TODO: add args and complete return()
export default function Link(props) {
  return (
    <StyledA href={props.url}>
      <StyledButton>{props.display_name}</StyledButton>
    </StyledA>
  );
}
