import React, { useState } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

const AddHabit = ({ open, onClose, onSave }) => {
  const [habit, setHabit] = useState({
    name: "",
    description: "",
    frequency: "",
    duration: "",
  });

  const handleChange = (e) => {
    setHabit({
      ...habit,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("jwt");
      if (!token) {
        console.error("No JWT token found");
        return;
      }

      const response = await fetch("http://localhost:8000/habits", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(habit),
      });

      console.log("Request sent with habit:", habit);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error from server:", errorData);
        throw new Error(errorData.message || "Failed to add habit");
      }

      const newHabit = await response.json();
      console.log("Habit added successfully:", newHabit);

      onSave(newHabit);
    } catch (error) {
      console.error("Error adding habit:", error);
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>New Habit</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Habit Name"
          type="text"
          fullWidth
          value={habit.name}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="description"
          label="Description"
          type="text"
          fullWidth
          value={habit.description}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="frequency"
          label="Frequency"
          type="text"
          fullWidth
          value={habit.frequency}
          onChange={handleChange}
        />
        <TextField
          margin="dense"
          name="duration"
          label="Duration"
          type="text"
          fullWidth
          value={habit.duration}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Add Habit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddHabit;
