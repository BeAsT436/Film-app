import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Header} from './components';
import MovieInfoPage from "./pages/MovieInfoPage";
import Home from "./pages/Home"

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<MovieInfoPage/>}/>
      </Routes>
    </Router>
  );
};

