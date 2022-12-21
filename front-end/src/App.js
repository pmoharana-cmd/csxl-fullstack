import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "./components/link/Link";
import UserAvatar from "./components/UserAvatar";
// TODO: import components

const NAME = "Dollar Chicken Sandwich Addict";

// Base page formatting... feel free to edit!
const StyledApp = styled.div`
  background: linear-gradient(135deg, #e66465, #9198e5);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  font-family: "Poppins", sans-serif;
  gap: 16px;
`;

const StyledHeader = styled.h2`
  padding: 0;
  margin: 0;
`;

function App() {
  // TODO: fetch links from API and store them to display on our page!

  const [links, setLinks] = useState([]);

  function fetchLinks() {
    fetch("http://localhost:8000/api/links")
      .then((response) => response.json())
      .then((response) => {
        setLinks(response);
      });
  }

  useEffect(() => fetchLinks(), []);

  // TODO: finish returning
  return (
    <StyledApp>
      <StyledHeader>{NAME}'s XLinks</StyledHeader>
      <UserAvatar
        alt="Chicken Sandwich!"
        src="https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-McChicken-1:product-header-desktop?wid=829&hei=455&dpr=off"
      ></UserAvatar>
      {links.map((a_link) => (
        <Link url={a_link.url} display_name={a_link.display_name}></Link>
      ))}
    </StyledApp>
  );
}

export default App;
