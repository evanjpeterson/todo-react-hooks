import React from "react";
import styled from "styled-components";
import { TodoList } from "./TodoList";
import { TodoProvider } from "./TodoProvider";

export const App = () => (
  <TodoProvider>
    <StyledApp>
      <header>To-do</header>
      <TodoList />
    </StyledApp>
  </TodoProvider>
);

const StyledApp = styled.div`
  text-align: center;

  header {
    background-color: #282c34;
    min-height: 10vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
`;
