import React from 'react'
import { Container, Typography, List, ListItem, ListItemText, Box } from '@mui/material';
const Friends = () => {
    const friends = [
        { name: 'John Doe', progress: 'Completed 5 habits today' },
        { name: 'Jane Smith', progress: 'Completed 3 habits today' },
      ];
  return (
    <Container maxWidth="sm">
    <Box sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Friends
      </Typography>
      <List>
        {friends.map((friend, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={friend.name}
              secondary={friend.progress}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  </Container>
  )
}

export default Friends