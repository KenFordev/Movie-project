import "./App.css";
import { useEffect, useState, createContext } from "react";

//Rout Imported
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Component Imported
import Navbar from "./components/Navbar";
import Shop from "./pages/shop/shop";
import Cart from "./pages/cart/Cart";

export const DataAPIContext = createContext(null);

function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("a");

  const [cartItem, setCartItem] = useState();
  console.log(cartItem);

  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] }));
  };

  const removeFormCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const conTextValue = { cartItem, addToCart, removeFormCart, data };

  const fetchData = async (searchValue) => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=c14608a76d475ca46713df921eb5d652&query=${searchValue}`
    );
    const convertData = await res.json();

    if (convertData.results) {
      setData(convertData.results);
    }
  };

  //ให้ rerender เมื่อมีการเก็บค่าบางอย่าง searchValue state
  useEffect(() => {
    fetchData(searchValue);
  }, [searchValue]);

  return (
    <DataAPIContext.Provider value={conTextValue}>
      <Router>
        <Navbar searchValue={searchValue} setSearchValue={setSearchValue} />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </DataAPIContext.Provider>
  );
}

export default App;
