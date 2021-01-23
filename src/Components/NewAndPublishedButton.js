import React from "react";
import styled from "styled-components";
const Main = styled.div`
  display: flex;

  justify-content: space-between;
  width: 40%;

  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 0px 10px;
  }
`;
const Button = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  width: 47%;
  color: white;
  cursor: pointer;
  height: 35px;
  justify-content: center;
  border-radius: 4px;
`;

function NewAndPublishedButton(props) {
  console.log(props.ButtonData);
  return (
    <Main>
      <Button
        onClick={() => props.handleButton("NewPost")}
        backgroundColor={props.ButtonData === "NewPost" ? "#4dab2e" : "#1890ff"}
      >
        New Post
      </Button>
      <Button
        onClick={() => props.handleButton("Published")}
        backgroundColor={
          props.ButtonData === "Published" ? "#4dab2e" : "#1890ff"
        }
      >
        Published
      </Button>
    </Main>
  );
}
export default NewAndPublishedButton;
