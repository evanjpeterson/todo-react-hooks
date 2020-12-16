import React from "react";
import styled from "styled-components";
import { TodoList } from "./TodoList";
import { TodoProvider } from "./TodoProvider";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export const App = () => (
  <>
    <GlobalStyle />
    <TodoProvider>
      <AppHeader>To-do</AppHeader>
      <TodoListContainer>
        <TodoList />
      </TodoListContainer>
    </TodoProvider>
  </>
);

const AppHeader = styled.div`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const TodoListContainer = styled.div`
  margin: auto;
  max-width: 60rem;
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
