import React from "react";
import { useState } from "react";
import axios from "axios";
import Card from "./components/Card.jsx";
import "./index.css";

const App = () => {
  const [alldata, setAlldata] = useState([]);
  async function loadData() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    setAlldata(response.data);
  }
  return (
    <>
      <button
        onClick={loadData}
        className="px-5 py-2.5 bg-emerald-500 font-bold text-xl font-serif m-5 rounded-md text-white cursor-pointer"
      >
        Get Data
      </button>
      <div className="allcards p-5 flex flex-wrap gap-5">
        {alldata.map((data, idx) => {
          return <Card key={idx} data={data} />;
        })}
      </div>
    </>
  );
};
export default App;
