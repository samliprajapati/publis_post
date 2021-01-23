import logo from "./logo.svg";
import "./App.css";
import SearchInpuBox from "./Components/SearchInputBox";
import styled from "styled-components";
import { useMemo, useReducer, useState } from "react";
import NewAndPublishedButton from "./Components/NewAndPublishedButton";
import Published from "./Components/PublishedPost";
import NewPostForm from "./Components/NewPostForm";
import { act } from "react-dom/test-utils";
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const MainContainer = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 50px;
`;

const initialState = [];
function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    default:
      return [...state];
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputData, setInputData] = useState("");
  const [ButtonData, setbuttonData] = useState("Published");
  const [titleData, setTitle] = useState("");
  const [bodyData, setBody] = useState("");
  const [validation, setValidation] = useState(false);

  function handleInputChange(e) {
    setInputData(e.target.value);
  }
  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleBody(e) {
    const newValue = e.currentTarget.value;
    setBody(newValue);
  }
  function handleClear() {
    setInputData("");
  }
  function handleButton(data) {
    setbuttonData(data);
  }

  function handlePost() {
    if (titleData === "" && bodyData === "") {
      setValidation(true);
    } else {
      dispatch({
        type: "add",
        payload: { title: titleData, body: bodyData },
      });
      setTitle("");
      setBody("");
      alert("success Fully create new post");
      setbuttonData("Published");
    }
  }

  const filteredPublished = useMemo(() => {
    return inputData === ""
      ? state
      : state.filter((item) => {
          debugger;
          return (
            item.title.toLowerCase().includes(inputData.toLowerCase()) ||
            item.body.toLowerCase().includes(inputData.toLowerCase())
          );
        });
  }, [inputData, state]);

  return (
    <MainContainer>
      <Container>
        {" "}
        <SearchInpuBox
          handleInputChange={handleInputChange}
          handleClear={handleClear}
          inputData={inputData}
        />
      </Container>
      <Container>
        <NewAndPublishedButton
          handleButton={handleButton}
          ButtonData={ButtonData}
        />
      </Container>
      <Container>
        {ButtonData === "Published" ? (
          <Published state={filteredPublished} />
        ) : (
          <NewPostForm
            dispatch={dispatch}
            handleTitle={handleTitle}
            titleData={titleData}
            bodyData={bodyData}
            handleBody={handleBody}
            handlePost={handlePost}
            validation={validation}
          />
        )}
      </Container>
    </MainContainer>
  );
}

export default App;
