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
  margin: 10px 0px;
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
  background-color: green;
  color: white;
  height: 35px;
  justify-content: center;
  border: 1px solid gainsboro;
`;
const ValidationText = styled.p`
  color: red;
  margin: 0px;
`;
function NewPostForm(props) {
  return (
    <Main>
      <Input placeholder="title" onChange={props.handleTitle} />
      {props.validation && (
        <ValidationText style={{ color: "red" }}>Input nedded</ValidationText>
      )}
      <br />
      {/* <TextArea placeholder="Body" onChange={props.handlebody} /> */}

      <MarkedDownInput handleBody={props.handleBody} />
      {props.validation && (
        <ValidationText style={{ color: "red" }}>Input nedded</ValidationText>
      )}
      <br />
      <Button onClick={props.handlePost}>Publish</Button>
    </Main>
  );
}
export default NewPostForm;
