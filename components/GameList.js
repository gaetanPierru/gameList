import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";
import Style from "../styles/GameList.module.css";
export default function GameList({ idType,setDisplay, setGameDescription }) {
  const [games, setGames] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    allGame();
    setPage(0);
  }, [idType]);

  const allGame = async () => {
    const num = page != 0 ? "&page=" + page : "";
    console.log(idType);

    const res =
      idType == 0
        ? await fetch(
            "https://api.rawg.io/api/games?key=f6a7a246070546cda87b921117e053a4" +
              num
          )
        : await fetch(
            "https://api.rawg.io/api/games?key=f6a7a246070546cda87b921117e053a4&genres=" +
              idType + num
          );
    const all = await res.json(); 
    console.log(all.results);
    setGames(all.results);
  };

  function nextPage() {
    previousPage;
    setPage(page + 1);
    allGame();
  }

  function previousPage() {
    setPage(page - 1);
    allGame();
  }

  return (
    <>
      {page != 0 ? (
        <button onClick={previousPage} className={Style.button}>
          {" "}
          {"<"}{" "}
        </button>
      ) : (
        ""
      )}
      <div className={Style.GameList}>
        <h1 className={Style.h1}>Liste de jeu:</h1>

        <div>
          {games.map((game, index) => (
            <GameCard game={game} key={index} setDisplay={setDisplay} setGameDescription={setGameDescription}/>
          ))}
        </div>
      </div>
      <button onClick={nextPage} className={Style.button}>
        {" "}
        {">"}{" "}
      </button>
    </>
  );
}
