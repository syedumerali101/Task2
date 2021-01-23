import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div>
      <header>
        <main>
          <Container>
            <HomeScreen />
          </Container>
        </main>
      </header>
    </div>
  );
}

export default App;
