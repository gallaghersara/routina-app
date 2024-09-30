import React, {Component} from 'react'
import { Container, Card, CardContent, Typography, List, ListItem, ListItemText, LinearProgress, Box } from '@mui/material';

class Rewards extends Component {
    render() {
        const rewards = [
          { name: 'Bronze Badge', pointsRequired: 100, pointsEarned: 70 },
          { name: 'Silver Badge', pointsRequired: 200, pointsEarned: 50 },
          { name: 'Gold Badge', pointsRequired: 300, pointsEarned: 20 },
        ];
  return (
    <Container maxWidth="sm">
    <Box sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Rewards
      </Typography>
      <List>
        {rewards.map((reward, index) => (
          <Card key={index} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {reward.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Points: {reward.pointsEarned} / {reward.pointsRequired}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={(reward.pointsEarned / reward.pointsRequired) * 100}
                sx={{ height: 10, borderRadius: 5 }}
              />
            </CardContent>
          </Card>
        ))}
      </List>
    </Box>
  </Container>
  );
}
}
export default Rewards