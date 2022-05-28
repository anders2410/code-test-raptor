import "./App.css";
import { CssBaseline } from "@mui/material";
import CardsPage, { Card } from "./pages/CardsPage";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import EntryPage from "./pages/EntryPage";

function App() {
  const [cards, setCards] = useState<Card[]>([]);

  const getData = useCallback(async () => {
    try {
      const res = await axios.get(
        "https://mocki.io/v1/d8cf29f5-a27d-41a0-b3ba-d8784ba55429"
      );
      // Simulating a slow call to the backend.
      //setTimeout(() => setCards(res.data), 2000);
      setCards(res.data);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const saveCard = (card: Card) => {
    console.log("Is this not called?");
    const existingElementIndex = cards.findIndex((c) => c.name === card.name);
    if (existingElementIndex !== -1) {
      cards[existingElementIndex] = card;
    } else {
      setCards((cards) => [card, ...cards]);
    }
  };

  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<CardsPage cards={cards} />} />
        <Route
          path="entry/:entryId"
          element={<EntryPage cards={cards} saveCard={saveCard} />}
        />
        <Route
          path="entry"
          element={<EntryPage cards={cards} saveCard={saveCard} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
