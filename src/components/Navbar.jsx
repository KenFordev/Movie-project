import React from "react";

//Router Dom Imported
import { Link } from "react-router-dom";

//Icons Imported
import { IoLogoAngular } from "react-icons/io";
import { ShoppingCart } from "phosphor-react";

//CSS Imported
import "./navbar.css";
import SearchBox from "./SearchBox";

function Navbar({ searchValue, setSearchValue }) {
  return (
    <nav className="nav-bg">
      <div className="container">
        <div className="nav-flex">
          <div className="nav-left">
            <div className="nav-flex-logo">
              <div className="nav-logo-head">TMDB</div>
              <IoLogoAngular className="nav-logo-item" />
            </div>
            <ul className="nav-menu">
              <li>
                <Link to="/">Shop</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right">
            <ul className="nav-icons">
              <li>
                <Link to="/cart">
                  <ShoppingCart size={32} />
                </Link>
              </li>
              <li>
                <SearchBox
                  searchValue={searchValue}
                  setSearchValue={setSearchValue}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
