import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage></HomePage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
