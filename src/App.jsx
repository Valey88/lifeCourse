import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import "../src/App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
export default App;
