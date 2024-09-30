import React from 'react'
import { Container, Typography, Grid, Box } from '@mui/material';
import DailyHabits from './DailyHabits';
import ProgressOverview from './ProgressOverview';
import Reminders from './Reminders';
import Rewards from '../gaminification/Rewards';


const Dashboard = () => {
  return (
    <Container maxWidth="lg">
    <Box sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <DailyHabits />
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <Reminders />
        </Grid> */}
        <Grid item xs={12}>
          <ProgressOverview />
        </Grid>
        <Grid item xs={12}>
          <Rewards />
        </Grid>
      </Grid>
    </Box>
  </Container>
  )
}

export default Dashboard