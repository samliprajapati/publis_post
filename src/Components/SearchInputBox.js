import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  border: 1px solid gainsboro;
  width: 30%;
  margin: 35px;
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  width: 10%;
  justify-content: center;
`;
const SearchIcons = styled.div`
  display: flex;
  align-items: center;
  width: 10%;
  justify-content: center;
`;
const Input = styled.input`
  border: none;
  width: 100%;
  height: 30px;
  &&:focus {
    outline: none;
  }
  &&:active {
    outline: none;
  }
`;
function SearchInpuBox(props) {
  return (
    <Main>
      <SearchIcons>
        {" "}
        <i class="fa fa-search" aria-hidden="true"></i>
      </SearchIcons>

      <Input
        placeholder="Search"
        onChange={props.handleInputChange}
        value={props.inputData}
      />
      {props.inputData && (
        <Icons onClick={props.handleClear}>
          <i class="fa fa-times" aria-hidden="true"></i>
        </Icons>
      )}
    </Main>
  );
}
export default SearchInpuBox;
