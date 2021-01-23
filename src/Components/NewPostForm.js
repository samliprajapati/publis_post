import React from "react";
import styled from "styled-components";
import { MarkedDownInput } from "./MarkDownInput";

const Main = styled.div`
  width: 30%;
  margin: 50px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const Input = styled.input`
  border: 1px solid gainsboro;
  width: 100%;
  height: 30px;
  padding: 4px;

  &&:focus {
    outline: none;
  }
  &&:active {
    outline: none;
  }
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  background-color: #4dab2e;
  color: white;
  height: 35px;
  justify-content: center;
  border-radius: 4px;
`;
const ValidationText = styled.p`
  color: #f18181;
  margin: 0px;
  font-size: 12px;
`;
function NewPostForm(props) {
  return (
    <Main>
      <Input
        placeholder="Title"
        onChange={props.handleTitle}
        value={props.title}
      />

      {props.title
        ? null
        : props.validation && <ValidationText>Input needed</ValidationText>}
      <br />
      <br />
      <MarkedDownInput handleBody={props.handleBody} body={props.body} />
      {props.body
        ? null
        : props.validation && <ValidationText>Input needed</ValidationText>}

      <Button onClick={props.handleCreate}>Publish</Button>
    </Main>
  );
}
export default NewPostForm;
