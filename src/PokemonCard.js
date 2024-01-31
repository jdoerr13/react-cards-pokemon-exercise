import React, { useState } from "react";
import useFlip from './hooks/useFlip'
import "./PokemonCard.css";

/* Renders a single pokemon card. */
function PokemonCard({ front, back, name, stats }) {
  const [isFacingUp, flipCard] = useFlip(true);//don't need useState and change 2nd parameter to the non used function below from setIsFacintUp to 'flipcard'
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);
  // };
  return (
    <div onClick={flipCard} className="PokemonCard Card">
      {isFacingUp ? (
        <div className="PokemonCard-front">
          <img src={front} alt={`{name} front`} />
          <div>
            <p className="PokemonCard-name">{name}</p>
            <ul className="PokemonCard-stats">
              {stats.map(stat => (
                <li key={stat.name}>
                  <em>{stat.name}</em>: {stat.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="PokemonCard-back">
          <img src={back} alt={`{name} back`} />
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
