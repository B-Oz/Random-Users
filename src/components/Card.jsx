import { useState, useEffect } from "react";
import axios from "axios";
import "./card.css";

// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

const Card = () => {
  const [data, setData] = useState(null);
  const getApi = () => {
    axios("https://randomuser.me/api/")
      .then((res) => {
        console.log(res);
        setData(res.data.results[0]);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className=" app  d-flex justify-content-center align-items-center flex-column ">
      {data && (
        <div className="card ">
          <div className="up d-flex flex-row justify-content-center ">
            <img
              className="m-3 photo"
              src={data.picture.medium}
              alt="user-img"
            />
            <p className="m-3">
              {data.name.title} {data.name.first} {data.name.last}
            </p>
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush ">
              <li className="list-group-item bg-transparent">
                {" "}
                Email: {data.email}
              </li>
              <li className="list-group-item bg-transparent">
                Phone: {data.phone}
              </li>
              <li className="list-group-item bg-transparent">
                {" "}
                Adress:
                {data.location.city}-{data.location.country}
              </li>
            </ul>
          </div>
          <div className="card-footer">
            <p>Age : {data.dob.age}</p>
            <p> Register Date: {data.registered.date.slice(0, 10)}</p>
          </div>
        </div>
      )}

      <button onClick={() => getApi()} className="btn btn-primary m-3">
        Random User
      </button>
    </div>
  );
};

export default Card;
