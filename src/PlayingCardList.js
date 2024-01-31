import React, { useState } from "react";
import {v1 as uuid} from "uuid";
// import axios from "axios";
import useAxios from './hooks/useAxios'
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, addCard] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/");
//The hook itself does not use useEffect to automatically fetch data upon component mount or upon changes to dependencies. Instead, it exposes an addData function (renamed addCard in the CardTable component) that the component can call to trigger data fetching and appending to the state:


  // const addCard = async () => {
  //   const response = await axios.get(
  //     "https://deckofcardsapi.com/api/deck/new/draw/"
  //   );
  //   setCards(cards => [...cards, { ...response.data, id: uuid() }]);
  // };

  const addCardWithId = async () => {
    await addCard(); // This will add a new card data from the API to the cards state
    // Assuming the response structure matches what you expect, you might need to adjust how you use the data
  };


  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCardWithId}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
