import React from "react";
import { Grid } from "@mui/material";
import Page from "../components/Page";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";

export interface CardType {
  name: string;
  description: string;
  category: string;
  createdBy: string;
}

interface Props {
  cards: CardType[];
}

const CardsPage = ({ cards }: Props) => {
  const navigate = useNavigate();

  const onCardClick = (entryId: string) => {
    navigate(`/entry/${entryId}`);
  };

  return (
    <Page>
      <Grid container spacing={3}>
        {cards.map((card) => (
          <Grid item xs={12} sm={6} md={3}>
            <Card card={card} onCardClick={onCardClick} />
          </Grid>
        ))}
      </Grid>
    </Page>
  );
};

export default CardsPage;
