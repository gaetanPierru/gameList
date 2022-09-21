import Image from "next/image";
import React, { useEffect, useState } from "react";
import Style from "../styles/GameDetail.module.css";

export default function GameDetail({ gameDescription, setDisplay }) {
  console.log(gameDescription);
  const [game, setGame] = useState([]);

  useEffect(() => {
    takeGame();
  }, []);

  async function takeGame(){
    const res = await fetch("https://api.rawg.io/api/games/"+ gameDescription.id +"?key=f6a7a246070546cda87b921117e053a4");
    const all = await res.json();
    setGame(all);
  }

  return (
    <>
    
      <div className={Style.card}>
        
        <div>
          <p>Developpé par : <span className={Style.dev}>
          {game.developers?.map(
              (develop) => " " + develop.name
            )}</span>
          </p>
          <Image
            src={game.background_image_additional}
            alt=""
            width="400"
            height="270"
          />
          
          <h1 className={Style.title}>{gameDescription.name}</h1>
          <p>genres : 
          {game.genres?.map(
              (genre, index) => <p className={Style.genre} key={index}>{genre.name}</p>
            )}
          </p>
        </div>
        <div>
          <p>
            {" "}
            rating: {gameDescription.rating}/{gameDescription.rating_top} ⭐ <span className={Style.close} onClick={ () => setDisplay(false)}> x </span>
          </p>
          <p>
            {" "}
            platforms:{" "}
            {gameDescription.platforms.map(
              (platform) => " " + platform.platform.name
            )}
          </p>
            <div   className={Style.description}>{game.description_raw}</div>
          <div className={Style.conteneur}>
            tag:
            {gameDescription.tags.map((tag, index) =>
              index % 5 == 0 ? (
                <>
                  <br />
                  <p className={Style.tag} key={index}>
                    {" "}
                    {" " + tag.name}
                  </p>{" "}
                </>
              ) : (
                <p className={Style.tag} key={index}>
                  {" "}
                  {" " + tag.name}
                </p>
              )
            )}
          </div>
            <p>Date de sortie: {gameDescription.released}</p>
        </div>
      </div>
    </>
  );
}
