import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
const Main = styled.div`
  height: 50vh;
  width: 80%;
  overflow: auto;
`;

const Card = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 100%;
  margin: 10px 0px;
`;
const Container = styled.div`
  padding: 10px 100px;
  @media only screen and (max-width: 600px) {
    padding: 10px 10px;
  }
`;
const EmptyPost = styled.p`
  display: flex;
  justify-content: center;
`;

function Published(props) {
  console.log(props.state);
  return (
    <Main>
      {!props.state.length ? (
        <EmptyPost>Data Not Yet Published.</EmptyPost>
      ) : (
        <>
          {props.state.map((item) => {
            console.log(item.body);
            return (
              <Card>
                <Container>
                  {" "}
                  <h2>
                    <b>{item.title}</b>
                  </h2>
                  <ReactMarkdown source={item.body} />
                </Container>
              </Card>
            );
          })}
        </>
      )}
    </Main>
  );
}
export default Published;
