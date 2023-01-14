import React from "react";
import styled from "@emotion/styled";
import Chat from "../../components/chat";
import Map from "./components/Map";

const Main = () => {
  return (
    <SContainer>
      <Map />
      <Chat />
    </SContainer>
  );
};

export default Main;

const SContainer = styled.div`
  width: 100%;
  height: 100vh;
`;
