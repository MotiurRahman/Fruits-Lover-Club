import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import ConsumedFruits from "./Components/ConsumedFruits/ConsumedFruits";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-sm-6 col-12">
          <Header></Header>
          <ConsumedFruits></ConsumedFruits>
        </div>
        <div className="col-lg-2 col-sm-6 col-12">
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
