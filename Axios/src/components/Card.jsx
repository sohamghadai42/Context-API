import React from "react";
import "../index.css";

const Card = (props)=>{
    return <>
    <div className="card h-[250px] w-[200px] bg-white rounded-2xl flex flex-col justify-center gap-2 items-center p-5">
        <h2 className="text-xl font-bold">{props.data.name}</h2>
        <h2>{props.data.email}</h2>
        <h2>Site:- {props.data.website}</h2>
    </div>
    </>
}
export default Card;