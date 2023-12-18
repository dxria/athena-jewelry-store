import "./css/style.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import ShopPage from "./components/ShopPage/ShopPage";
import data from "./data.js"

function App() {
  return (
      <div className="App">

        <Header />
        <Navigation />
        <ShopPage data={data} />
      </div>
  );
}

export default App;
