
import './App.css';
import { Routers } from "./components/Routers";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routers></Routers>
    </div>
  );
}

export default App;
