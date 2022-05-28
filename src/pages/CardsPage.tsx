import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Page from "../components/Page";
import { useNavigate } from "react-router-dom";

export interface Card {
  name: string;
  description: string;
  category: string;
  createdBy: string;
}

interface Props {
  cards: Card[];
}

const CardsPage = ({ cards }: Props) => {
  const navigate = useNavigate();

  const onCardClick = (entryId: string) => {
    navigate(`/entry/${entryId}`);
  };

  return (
    <Page>
      <Container maxWidth="lg" sx={{ margin: "20px auto", minHeight: "80vh" }}>
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ height: "100%", maxWidth: 345 }}>
                <CardActionArea
                  onClick={() => onCardClick(card.name)}
                  sx={{ height: "100%" }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",
                    }}
                  >
                    <Stack>
                      <Typography gutterBottom variant="h5" component="div">
                        {card.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {card.description}
                      </Typography>
                    </Stack>
                    <Stack>
                      <Typography
                        variant="subtitle2"
                        color="text.secondary"
                        sx={{ mt: "10px" }}
                      >
                        {card.createdBy}
                      </Typography>
                      <Chip
                        label={card.category}
                        size="small"
                        sx={{ mt: "10px", width: "fit-content" }}
                      />
                    </Stack>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  );
};

export default CardsPage;
