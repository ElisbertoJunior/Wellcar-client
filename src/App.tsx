import styled from "styled-components";
import NavBar from "./components/NavBar";
import GlobalStyle, { colors } from "./styles";

import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Login from "./components/Login";
import { useState } from "react";

const Container = styled.div`
  display: grid;
  grid-template-columns: 256px 1fr;
  position: relative;
`;

export const MainContainer = styled.div`
  background: ${colors.grayColor};
  padding: 0.5rem;
  min-height: 100vh;
`;

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const login = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setIsAuthenticated(true)
  }
  return (
    <>
      {!isAuthenticated ? <Login onSubmit={login}/> : null}
      
      <BrowserRouter>
        <GlobalStyle />
        <Container>
          <NavBar />
          <MainContainer>
            <Routes />
          </MainContainer>
        </Container>
      </BrowserRouter>
    </>
  );
};

export default App;
