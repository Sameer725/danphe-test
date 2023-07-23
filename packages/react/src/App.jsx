import "./App.css";
import { Provider } from "./providers/ColorProvider";
import Button from "./components/Button";
import Container from "./components/Container";
import HistoryText from "./components/Text";

function App() {
  return (
    <Provider>
      <Container>
        <Button />
        <HistoryText />
      </Container>
    </Provider>
  );
}

export default App;
