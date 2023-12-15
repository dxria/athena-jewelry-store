import "./css/style.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import ShopItems from "./components/ShopItems/ShopItems";
import data from "./data.js"

function App() {
  return (
    <div className="App">
       
      <Header />
      <Navigation />
      {/*<SideBar />*/}
      <ShopItems data={data} />
      
      
    </div>
  );
}

export default App;
