import React from 'react'
import { Container, TextField, Button, Typography, Box } from '@mui/material';
const AddFriend = () => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
          Add Friend
        </Typography>
        <form>
          <TextField
            fullWidth
            label="Username or Email"
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
            Add Friend
          </Button>
        </form>
      </Box>
    </Container>
  )
}

export default AddFriend