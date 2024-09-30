import React from 'react'
import { Container, TextField, Button, Typography, Box } from '@mui/material';
const ProfileCreation = () => {
  return (
<Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Create Profile
        </Typography>
        <form>
          <TextField
            fullWidth
            label="Name"
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
            Create Profile
          </Button>
        </form>
      </Box>
    </Container>
  )
}

export default ProfileCreation