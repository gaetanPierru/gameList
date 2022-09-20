import React, { useEffect, useState } from "react";
import Style from "../styles/GameListType.module.css"
import GameType from "./GameType";

export default function GameListType({setIdType, setDisplay}) {
  const [types, setTypes] = useState([]); 

  useEffect(() => {
    allType();
  }, []);

  const allType = async () => {
    const res = await fetch(
      "https://api.rawg.io/api/genres?key=f6a7a246070546cda87b921117e053a4"
    );
    const all = await res.json();
    console.log(all.results);
    setTypes(all.results);
  };



  return (
    <>
      <div className={Style.Gametype}>
        <h1>Genres :</h1>
      {types.map((type, index) => (
        <GameType  key={index} type={type} setIdType={setIdType} setDisplay={setDisplay}/>
      ))}
      </div>
    </>
  );
}
