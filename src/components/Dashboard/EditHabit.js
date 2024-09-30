// EditHabit.js
import React, { useState } from 'react';
import {
  Container, TextField, Button, Typography, Box, MenuItem, List, ListItem,
} from "@mui/material";

const EditHabit = ({ habit, onSave, onDelete, onClose }) => {
  const [name, setName] = useState(habit.name);
  const [description, setDescription] = useState(habit.description);
  const [frequency, setFrequency] = useState(habit.frequency);
  const [duration, setDuration] = useState(habit.duration);

  const handleSave = () => {
    if (window.confirm('Are you sure you want to save the changes?')) {
      onSave({ ...habit, name, description, frequency, duration });
    }
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this habit?')) {
      onDelete(habit.id);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Edit Habit
        </Typography>
        <form>
          <TextField
            fullWidth
            label="Habit Name"
            margin="normal"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            fullWidth
            label="Description"
            margin="normal"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            fullWidth
            select
            label="Frequency"
            margin="normal"
            variant="outlined"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="weekly">Weekly</MenuItem>
            <MenuItem value="custom">Custom</MenuItem>
          </TextField>
          <TextField
            fullWidth
            select
            label="Time Duration"
            margin="normal"
            variant="outlined"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          >
            <MenuItem value="2 weeks">2 Weeks</MenuItem>
            <MenuItem value="1 month">1 Month</MenuItem>
            <MenuItem value="3 months">3 Months</MenuItem>
          </TextField>

          <List>
            <ListItem>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSave}
                sx={{ mt: 3 }}
              >
                Save Changes
              </Button>
            </ListItem>
            <ListItem>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={handleDelete}
                sx={{ mt: 3 }}
              >
                Delete
              </Button>
            </ListItem>
            <ListItem>
              <Button
                fullWidth
                variant="contained"
                onClick={onClose}
                sx={{ mt: 3 }}
              >
                Cancel
              </Button>
            </ListItem>
          </List>
        </form>
      </Box>
    </Container>
  );
};

export default EditHabit;
