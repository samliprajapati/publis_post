import "./App.css";
import SearchInpuBox from "./Components/SearchInputBox";
import styled from "styled-components";
import { useMemo, useReducer, useState } from "react";
import NewAndPublishedButton from "./Components/NewAndPublishedButton";
import Published from "./Components/PublishedPost";
import NewPostForm from "./Components/NewPostForm";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const MainContainer = styled.div`
  border: 1px solid gainsboro;
  border-radius: 8px;
  margin: 50px;
  @media only screen and (max-width: 600px) {
    margin: 0px;
    height: 100vh;
  }
`;
const SuccessMessage = styled.p`
  color: #4dab2e;
  text-align: center;
  margin: 0px;
  border: 1px solid #4dab2e;
  width: 50%;
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
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [validation, setValidation] = useState(false);
  const [success, setSuccess] = useState(false);

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

  function handleCreate() {
    if (title === "" && body === "") {
      setValidation(true);
    } else {
      debugger;
      dispatch({
        type: "add",
        payload: { title, body },
      });
      setSuccess(true);
      setTitle("");
      setBody("");
      setbuttonData("Published");
    }
    setTimeout(function () {
      setSuccess(false);
    }, 3000);
  }

  const filteredData = useMemo(() => {
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
        {success && (
          <SuccessMessage>New Post Added SuucessFully </SuccessMessage>
        )}
      </Container>

      <Container>
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
          <Published state={filteredData} />
        ) : (
          <NewPostForm
            dispatch={dispatch}
            handleTitle={handleTitle}
            title={title}
            body={body}
            handleBody={handleBody}
            handleCreate={handleCreate}
            validation={validation}
          />
        )}
      </Container>
    </MainContainer>
  );
}

export default App;
