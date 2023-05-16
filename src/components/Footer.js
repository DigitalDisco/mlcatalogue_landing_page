import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterStyled>
      <div>
        <p>Designed & coded by&nbsp;</p>
        <a
          href="https://github.com/DigitalDisco"
          target="_blank"
          rel="noopener noreferrer"
        >
          Atlas S. 
        </a>
      </div>
      <p>© 2023</p>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  width: 100%;
  max-width: 76rem;
  margin-top: 128px;
  padding: 20px 0;
  border-top: 1px solid #b9cbd9;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  color: white;

  a {
    color: white;

    @media (hover: hover) {
      :hover {
        color: #6275ff;
      }
    }
  }

  div {
    display: flex;
    align-items: baseline;
  }

  @media only screen and (max-width: 640px) {
    margin-top: 64px;
    font-size: 14px;
    line-height: 21px;
  }
`;

export default Footer;
