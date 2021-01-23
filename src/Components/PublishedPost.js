import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
const Main = styled.div`
  height: 50vh;
  width: 50%;
  overflow: auto;
`;

const Card = styled.div`
  border: 1px solid gray;
  padding: 10px;
  margin: 10px;border-radius: 4px;
`;

const EmptyPost = styled.p`
  display: flex;
  justify-content: center;
`;
const Title = styled.p`
  color: gray;
  margin: 0px;
  font-size: 22px;
  font-family: Roboto;
`;
const Body = styled.p`
  color: gray;
  margin: 0px;
  font-size: 18px;
  font-family: Roboto;
`;

function Published(props) {
  console.log(props.state);
  return (
    <Main>
      {!props.state.length ? (
        <EmptyPost>Data Not yet published.</EmptyPost>
      ) : (
        <>
          {props.state.map((item) => {
            console.log(item.body);
            return (
              <Card>
                {" "}
                <Title>{item.title}</Title>
                <Body>
                  {" "}
                  <ReactMarkdown source={item.body} />
                </Body>
              </Card>
            );
          })}
        </>
      )}
    </Main>
  );
}
export default Published;
