import React from "react";
import {
  CardActionArea,
  Card as MUICard,
  CardContent,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { CardType } from "../pages/CardsPage";
import { Facebook, Info, QuestionMark } from "@mui/icons-material";

interface Props {
  card: CardType;
  onCardClick: (id: string) => void;
}

const getIcon = (name: string) => {
  switch (name) {
    case "Facebook":
      return <Facebook />;
    default:
      return <QuestionMark />;
  }
};

const Card = ({ card, onCardClick }: Props) => {
  return (
    <MUICard sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={() => onCardClick(card.name)}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "250px",
            backgroundColor: "#f3f3f5",
          }}
        >
          <Stack>
            <Stack direction="row" alignItems="center" mb="5px">
              {getIcon(card.name)}
              <Typography
                ml="10px"
                fontWeight="bold"
                variant="h5"
                component="div"
              >
                {card.name}
              </Typography>
            </Stack>
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
          </Stack>
          <Stack>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              fontStyle="italic"
              sx={{ mt: "10px" }}
            >
              {card.createdBy}
            </Typography>
            <Chip
              label={card.category}
              size="small"
              sx={{
                mt: "10px",
                width: "fit-content",
                fontWeight: "bold",
                backgroundColor: "#7B144B",
                color: "white",
              }}
            />
          </Stack>
        </CardContent>
      </CardActionArea>
    </MUICard>
  );
};

export default Card;
