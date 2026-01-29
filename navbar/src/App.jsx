import React  from "react";
import { useState } from "react";
import "./index.css";
import Men from "./components/Men.jsx";
import Women from "./components/Women.jsx";

const App =()=>{
  const [gender, setGender] = useState("Male");
  return <div className="parent flex flex-col items-center justify-center h-screen ">
    <h1 className="text-4xl text-white ml-3">{gender}</h1>
    <button
    className="px-14 py-7.5 text-xl bg-emerald-500 mt-5 text-white rounded-xl active:scale-95 transition-all-ease-0.2s" 
    onClick={function(){
      if(gender === "Male"){
        setGender("Female");
      }else{
        setGender("Male");
      }
    }}>
      Change Gender
    </button>
    {gender === "Male" ? <Men/>:<Women/>}
  </div>
}
export default App;