import React from "react";
import "./App.css";
import styled from "styled-components";
import myLandscape from "./pictures/landscape.jpg";

function App() {
  return (
    <GeneralDiv>
      <StyledImage src={myLandscape} alt="This is landScape" />
      <StyledTitle>Анапа</StyledTitle>
      <StyledText>
        Анапа — это город-курорт на юге России, расположенный на берегу Анапской
        бухты Чёрного моря. Благодаря своему климату и бальнеологическим
        ресурсам, Анапа привлекает множество туристов. Город известен своими
        песчаными пляжами, мелководьем и комфортной температурой воды в
        купальный сезон.
      </StyledText>
      <ButtonsDiv>
        <StyledButton>See more</StyledButton>
        <StyledButton>Save</StyledButton>
      </ButtonsDiv>
    </GeneralDiv>
  );
}

export default App;

export const ButtonsDiv = styled.div`
  display: flex;
`;

export const StyledButton = styled.button`
  font-size: 2rem;
`;

const GeneralDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5%;
`;

export const StyledTitle = styled.h1`
  font-weight: bold;
`;

export const StyledText = styled.p`
  text-align: justify;
`;
