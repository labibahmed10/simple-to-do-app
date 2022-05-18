import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage></HomePage>}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
