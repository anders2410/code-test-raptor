import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import { useNavigate, useParams } from "react-router-dom";
import { CardType } from "./CardsPage";
import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

interface Props {
  cards: CardType[];
  saveCard: (c: CardType) => void;
}

const EntryPage = ({ cards, saveCard }: Props) => {
  const { entryId } = useParams();
  const navigate = useNavigate();
  const card = cards.find((c) => c.name === entryId);

  const [name, setName] = useState(card?.name ?? "");
  const [description, setDescription] = useState(card?.description ?? "");
  const [category, setCategory] = useState(card?.category ?? "");
  const [createdBy, setCreatedBy] = useState(card?.createdBy ?? "");

  // Could be removed with a Loader.
  useEffect(() => {
    setName(card?.name ?? "");
    setDescription(card?.description ?? "");
    setCategory(card?.category ?? "");
    setCreatedBy(card?.createdBy ?? "");
  }, [card]);

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const onCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  const onCreatedByChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreatedBy(e.target.value);
  };

  const onSubmit = () => {
    saveCard({ name, description, category, createdBy });
    navigate("/");
  };

  return (
    <Page>
      <Paper
        elevation={2}
        sx={{ minHeight: "80vh", padding: "30px", backgroundColor: "#f3f3f5" }}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap={5}
          component="form"
        >
          <Typography variant="h4" component="div">
            {card != null ? "Edit this card" : "Create a new card"}
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 3, md: 5 }}
          >
            <Stack spacing={3}>
              <TextField
                required
                id="name"
                label="Name"
                value={name}
                onChange={onNameChange}
                sx={{ width: "30ch", backgroundColor: "white" }}
              />
              <TextField
                required
                id="name"
                label="Category"
                value={category}
                onChange={onCategoryChange}
                sx={{ width: "30ch", backgroundColor: "white" }}
              />
              <TextField
                required
                id="name"
                label="Created by"
                value={createdBy}
                onChange={onCreatedByChange}
                sx={{ width: "30ch", backgroundColor: "white" }}
              />
            </Stack>
            <TextField
              required
              fullWidth
              id="name"
              label="Description"
              value={description}
              multiline
              rows={8}
              onChange={onDescriptionChange}
              sx={{ width: "30ch", backgroundColor: "white" }}
            />
          </Stack>
          <Box>
            <Button
              variant="contained"
              onClick={onSubmit}
              disabled={
                name === "" ||
                description === "" ||
                category === "" ||
                createdBy === ""
              }
              sx={{ backgroundColor: "#7B144B" }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Paper>
    </Page>
  );
};

export default EntryPage;
