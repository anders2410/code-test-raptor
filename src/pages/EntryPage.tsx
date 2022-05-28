import React, { useState } from "react";
import Page from "../components/Page";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "./CardsPage";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

interface Props {
  cards: Card[];
  saveCard: (c: Card) => void;
}

interface Validation {
  name?: string;
  description?: string;
  category?: string;
  createdBy?: string;
}

const initialValidationState = {
  name: "",
  description: "",
  category: "",
  createdBy: "",
};

const EntryPage = ({ cards, saveCard }: Props) => {
  const { entryId } = useParams();
  const navigate = useNavigate();
  const entry = cards.find((c) => c.name === entryId);

  const [name, setName] = useState(entry?.name ?? "");
  const [description, setDescription] = useState(entry?.description ?? "");
  const [category, setCategory] = useState(entry?.category ?? "");
  const [createdBy, setCreatedBy] = useState(entry?.createdBy ?? "");

  const [errors, setErrors] = useState<Validation>(initialValidationState);

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
    if (validateForm()) {
      saveCard({ name, description, category, createdBy });
      navigate("/");
    }
  };

  const validateForm = () => {
    setErrors({
      name: name === "" ? "Is required." : "",
      description: description === "" ? "Is required." : "",
      category: category === "" ? "Is required." : "",
      createdBy: createdBy === "" ? "Is required." : "",
    });

    return !(
      name === "" ||
      description === "" ||
      category === "" ||
      createdBy === ""
    );
  };

  return (
    <Page>
      <Container maxWidth="lg" sx={{ margin: "20px auto", minHeight: "80vh" }}>
        <Paper elevation={2} sx={{ padding: "30px" }}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            gap={5}
            component="form"
          >
            <Typography variant="h4" component="div">
              Entry
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
                  error={errors.name !== ""}
                  helperText={errors.name}
                  sx={{ width: "30ch" }}
                />
                <TextField
                  required
                  id="name"
                  label="Category"
                  value={category}
                  onChange={onCategoryChange}
                  error={errors.category !== ""}
                  helperText={errors.category}
                  sx={{ width: "30ch" }}
                />
                <TextField
                  required
                  id="name"
                  label="Created by"
                  value={createdBy}
                  onChange={onCreatedByChange}
                  error={errors.createdBy !== ""}
                  helperText={errors.createdBy}
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
                error={errors.description !== ""}
                helperText={errors.description}
                sx={{ width: "30ch" }}
              />
            </Stack>
            <Box>
              <Button
                variant="contained"
                color="primary"
                onClick={onSubmit}
                disabled={
                  name === "" ||
                  description === "" ||
                  category === "" ||
                  createdBy === ""
                }
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Page>
  );
};

export default EntryPage;
