import React, { FC } from "react";
import styled from "@emotion/styled";

const Chat: FC = () => {
  return <SContainer></SContainer>;
};

export default Chat;

const SContainer = styled.div`
  position: relative;
  bottom: 0;
  padding: 25px;
  width: 350px;
  height: 550px;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px -1px 20px rgba(66, 66, 66, 0.25);
  border-radius: 40px;
`;
