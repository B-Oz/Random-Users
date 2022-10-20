import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className=" app  d-flex justify-content-center align-items-center flex-column ">
      <div className="card ">
        <div className="up d-flex flex-row justify-content-center ">
          <img className="m-3" src="./salı.jpg" alt="user-img" />
          <p className="m-3">Beyza Özbilgin</p>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush ">
            <li className="list-group-item bg-transparent">An item</li>
            <li className="list-group-item bg-transparent">A second item</li>
            <li className="list-group-item bg-transparent">A third item</li>
          </ul>
        </div>
        <div className="card-footer">
          <p>Age : 26</p>
          <p> Register Date: 2004-07-31</p>
        </div>
      </div>

      <button className="btn btn-primary m-3">Random User</button>
    </div>
  );
};

export default Card;
