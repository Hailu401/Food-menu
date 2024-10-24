import React, { Component } from "react";
import EvangadiHead from "./Component/EvangadiHead";
import "./Component/css/style.css";
import FoodItem from "./Component/FoodItem";
import menu from "../Resources/data";

export default class App extends Component {
  render() {
    return (
      <div className="all-container">
        <EvangadiHead />
        <div className="foods-container">
          {menu.map(function (obj) {
            return (
              <FoodItem
              key={obj.id}
                obj={obj}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
