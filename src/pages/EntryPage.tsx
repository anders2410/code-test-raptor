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
  const entry = cards.find((c) => c.name === entryId);

  const [name, setName] = useState(entry?.name ?? "");
  const [description, setDescription] = useState(entry?.description ?? "");
  const [category, setCategory] = useState(entry?.category ?? "");
  const [createdBy, setCreatedBy] = useState(entry?.createdBy ?? "");

  // Could be removed with a Loader and call to the backend.
  useEffect(() => {
    setName(entry?.name ?? "");
    setDescription(entry?.description ?? "");
    setCategory(entry?.category ?? "");
    setCreatedBy(entry?.createdBy ?? "");
  }, [entry]);

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
      <Paper elevation={2} sx={{ minHeight: "80vh", padding: "30px" }}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          gap={5}
          component="form"
        >
          <Typography variant="h4" component="div">
            {entry != null ? "Edit this card" : "Create a new card"}
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
                sx={{ width: "30ch" }}
              />
              <TextField
                required
                id="name"
                label="Category"
                value={category}
                onChange={onCategoryChange}
                sx={{ width: "30ch" }}
              />
              <TextField
                required
                id="name"
                label="Created by"
                value={createdBy}
                onChange={onCreatedByChange}
                sx={{ width: "30ch" }}
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
              sx={{ width: "30ch" }}
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
