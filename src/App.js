import "./css/style.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import SideBar from "./components/SideBar/SideBar.jsx";
import data from "./data.js"

function App() {
  return (
      <div className="App">

        <Header />
        <Navigation />
        <SideBar data={data} />
      </div>
  );
}

export default App;
