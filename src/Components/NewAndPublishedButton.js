import React from "react";
import styled from "styled-components";
const Main = styled.div`
  display: flex;
  border: 1px solid gainsboro;
  justify-content: space-between;
  width: 40%;
  margin: 30px;
  @media only screen and (max-width: 600px) {
    width: 100%;
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
  border: 1px solid gainsboro;
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
