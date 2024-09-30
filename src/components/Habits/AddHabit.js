import React from 'react'
import { Container, TextField, Button, Typography, Box, MenuItem } from '@mui/material';
const AddHabit = () => {
  return (
    <Container maxWidth="sm">
    <Box sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Add Habit
      </Typography>
      <form>
        <TextField
          fullWidth
          label="Habit Name"
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="Description"
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          select
          label="Frequency"
          margin="normal"
          variant="outlined"
        >
          <MenuItem value="daily">Daily</MenuItem>
          <MenuItem value="weekly">Weekly</MenuItem>
          <MenuItem value="custom">Custom</MenuItem>
        </TextField>
        <TextField
          fullWidth
          select
          label="saf"
          margin="normal"
          variant="outlined"
        >
          <MenuItem value="daily">Daily</MenuItem>
          <MenuItem value="weekly">Weekly</MenuItem>
          <MenuItem value="custom">Custom</MenuItem>
        </TextField>
        <TextField
          fullWidth
          label="Category"
          margin="normal"
          variant="outlined"
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          sx={{ mt: 3 }}
        >
          Add Habit
        </Button>
      </form>
    </Box>
  </Container>
  )
}

export default AddHabit