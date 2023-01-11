import FoodList from "./components/FoodList";
import AddFood from "./components/AddFood";
import EditFood from "./components/EditFood";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavbarComponent from "./components/NavbarComponent";
import About from "./components/About/About";
import AddDrink from "./components/Drink/AddDrink";
import DrinkList from "./components/Drink/DrinkList"
import EditDrink from "./components/Drink/EditDrink";
import DessertList from './components/Dessert/DesserList'
import AddDessert from "./components/Dessert/AddDessert";
import EditDessert from "./components/Dessert/EditDessert";

function App() {
  return (
    <BrowserRouter>
    <NavbarComponent />
    <div className="container">
    <Routes>
    <Route path="/" element={<About />} />
    {/* Food */}
      <Route path="/food" element={<FoodList/>} />
      <Route path="/add" element={<AddFood/>} />
      <Route path="/edit/:id" element={<EditFood/>} />
      {/* Drink */}
      <Route path="/drink" element={<DrinkList />} />
      <Route path="/addDrink" element={<AddDrink />} />
      <Route path="/editDrink/:id" element={<EditDrink/>} />
      {/* Dessert */}
      <Route path="/dessert" element={<DessertList />} />
      <Route path="/addDessert" element={<AddDessert />} />
      <Route path="/editDessert/:id" element={<EditDessert />} />
    </Routes>
    </div>
   
    
    </BrowserRouter>
    
  );
}

export default App;
