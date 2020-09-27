import React from "react";
import { MainLayout } from "~/src/components/MainLayout/MainLayout";
import { Title } from "~/src/design-system/Text/Title";
import { StyledMainContainer, StyledTitle } from "./home.styles";

const Home = () => {
  return (
    <MainLayout>
      <StyledMainContainer>
        <Title color="secondary">sups</Title>
      </StyledMainContainer>
    </MainLayout>
  );
};

export default Home;
