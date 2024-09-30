import React from 'react'
import { Card, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
const Reminders = () => {
    const reminders = [
        { time: '08:00 AM', habit: 'Morning Run' },
        { time: '09:00 PM', habit: 'Read a Book' },
      ];
    
  return (
    <Card>
    <CardContent>
      <Typography variant="h5" gutterBottom>
        Reminders
      </Typography>
      <List>
        {reminders.map((reminder, index) => (
          <ListItem key={index}>
            <ListItemText primary={reminder.habit} secondary={
reminder.time} />
          </ListItem>
        ))}
      </List>
    </CardContent>
  </Card>
  )
}

export default Reminders