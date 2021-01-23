import React from "react";
import styled from "styled-components";

const TextArea = styled.textarea`
  border: 1px solid gainsboro;
  width: 100%;
  height: 80px;
  margin: 10px 0px;
  &&:focus {
    outline: none;
  }
  &&:active {
    outline: none;
  }
`;

export function MarkedDownInput(props) {
  console.log(props.handleBody);
  return <TextArea placeholder={"Body"} onChange={props.handleBody} />;
}
