import React from 'react'
import { Card, CardContent, Typography, Box } from '@mui/material';
const ProgressOverview = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Progress Overview
        </Typography>
        <Box sx={{ mt: 2 }}>
          {/* Placeholder for graphs */}
          <Typography variant="body1">Graph will be here</Typography>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProgressOverview