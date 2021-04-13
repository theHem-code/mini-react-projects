import React from "react";
import menu from "../data/menu";
import "../Menu.css";
import foto from "../images/menu-item.jpeg";

const Menu = () => {
  const renderedMenu = menu.map((dish) => {
    return (
      <article className="menu-item">
        <img src={foto} className="photo" alt="menu item" />
        <div className="item-info">
          <header>
            <h4>{dish.title}</h4>
            <h4 className="price">${dish.price}</h4>
          </header>
          <p className="item-text">
            {dish.desc}
          </p>
        </div>
      </article>
    );
  });

  // const filterBreakfast = menu.filter(item => item.category === 'Breakfast').map(filteredItem =>)

  return (
    <div>
      <section className="menu">
        <div className="title">
          <h3>our menu</h3>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button className="filter-btn" type="button">all</button>
          <button className="filter-btn" type="button">breakfast</button>
          <button className="filter-btn" type="button">lunch</button>
          <button className="filter-btn" type="button">shakes</button>
        </div>
        <div className="section-center">
          {renderedMenu}
        </div>
      </section>
    </div>
  );
};

export default Menu;
