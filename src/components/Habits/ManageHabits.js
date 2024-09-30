import React from 'react'
import { Container, Typography, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const ManageHabits = () => {
    const habits = [
        { name: 'Morning Run', description: 'Run every morning for 30 minutes', frequency: 'Daily', category: 'Health' },
        { name: 'Read a Book', description: 'Read a book for 1 hour', frequency: 'Daily', category: 'Personal Growth' },
      ];
    
  return (
    <Container maxWidth="sm">
    <Box sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Manage Habits
      </Typography>
      <List>
        {habits.map((habit, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={habit.name}
              secondary={`${habit.description} - ${habit.frequency} - ${habit.category}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="edit">
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  </Container>
  )
}

export default ManageHabits