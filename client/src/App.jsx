import { Outlet } from "react-router-dom";
import Navbar from "./components/common/navbar/Navbar";

function App() {
  return (
    <div id="App">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
