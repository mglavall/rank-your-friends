import React from "react";
import { MainLayout } from "~/src/components/MainLayout/MainLayout";
import { StyledMainContainer, StyledTitle } from "./home.styles";

const Home = () => {
  return (
    <MainLayout>
      <StyledMainContainer>
        <StyledTitle>sups</StyledTitle>
      </StyledMainContainer>
    </MainLayout>
  );
};

export default Home;
