import "./App.css";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import Container from "./context/Container";

function App() {
  return (
    <Container>
      <h1>Context API</h1>
      <ChildOne />
      <ChildTwo />
    </Container>
  );
}

export default App;
