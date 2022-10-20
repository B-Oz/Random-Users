import { useState } from "react";
import axios from "axios";
import "./card.css";

// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

const Card = () => {
  const [data, setData] = useState(null);
  const getApi = () => {
    axios("https://randomuser.me/api/")
      .then((res) => {
        console.log(res);
        setData(res.data.result[0]);
      })
      .catch((err) => console.log(err));
  };

  getApi();

  return (
    <div className=" app  d-flex justify-content-center align-items-center flex-column ">
      <div className="card ">
        <div className="up d-flex flex-row justify-content-center ">
          <img className="m-3 photo" src="./salı.jpg" alt="user-img" />
          <p className="m-3">Beyza Özbilgin</p>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush ">
            <li className="list-group-item bg-transparent"> mail</li>
            <li className="list-group-item bg-transparent">telefon</li>
            <li className="list-group-item bg-transparent">adres</li>
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
