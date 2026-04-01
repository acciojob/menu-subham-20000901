 import React from "react";
 import data from "./Data";
 import {useState} from "react";
 import "./Menu.css";
//  import logo from "../assets/logo.jpg"

const Menu = () => {
  const [menu, setMenu] = useState(data);
  

  function filterMenu(itemToAdd){
    const filteredItems = data.filter(i => i.category === itemToAdd);
    setMenu(filteredItems);
  }

function displayAll(){
    setMenu(data)
}



   return (
    <>
      <div className="container" id="main">

        <h1>Our Menu</h1>
         <div className="top">
            <button onClick={displayAll}>All</button>
            <button id="filter-btn-1" onClick={() =>filterMenu("breakfast")}>Breakfast</button>
            <button id="filter-btn-2" onClick={() =>filterMenu("lunch")}>Lunch</button>
            <button id="filter-btn-3" onClick={() =>filterMenu("shakes")}>Shakes</button>
         </div>
         <div className="menu-items">
             { menu.map((item) => (
                    <div className="menuCard"
                     key={item.id}
                     data-test-id={`menu-item-${item.category}`}
                    >
                        <img src={item.img} alt="" />
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                        <p>{item.desc}</p>
                    </div>
                ))
            }
         </div>
        
        </div> 
    </>
   )
}

export default Menu;