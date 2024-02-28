import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Header />
      <Home />
    </Router>
  );
};

export default App;
