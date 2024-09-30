import React, { useState, useContext } from 'react'
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../services/fechData';
import AuthContext from '../services/AuthContext';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  // const { setIsAuthenticated } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const { email, password } = formData;
    try {
      const response = await fetch('http://localhost:8000/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      
      if (response.status === 200) {
        const { token } = await response.json();
        localStorage.setItem('jwt', token); 
        navigate('/dashboard');
      } else {
        alert('Login failed!');
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  // const loginUser = async (email, password) => {
  //   try {
  //     const response = await axios.post('http://localhost:5000/auth/signin', { email, password });
  //     const { token } = response.data;

  //     localStorage.setItem('token', token);

  //     // Set Authorization header for future requests
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  //     navigate('/dashboard'); // Redirect to homepage
  //     console.log(token);
  //     console.log(email);
  //   } catch (error) {
  //     console.error('Login error', error);
  //   }
  // };
  
   const handleLogin1 = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/auth/signin', { formData });
            // const { token } = response.data;
            // Store the token in local storage
            // localStorage.setItem('token', token);
            // Navigate to the home page
            console.log('Login successful:', response.data);
            navigate('/dashboard'); // Redirect to homepage
            // history.push('/home');
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Invalid email or password');
        }
    };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const response = await fetchData('auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.status === 200) {
        // const { token } = await response.json();
        const { token } = response.data;
        localStorage.setItem('token', token);
        console.log('Login successful:', response.data);
        // setIsAuthenticated(true);
        // Set user data in state or context if needed
        navigate('/dashboard'); // Redirect to homepage
    }
      // if (response.error) {
      //   alert(response.error);
      // } else {
      //   alert('User logged in successfully');
      // }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <Container maxWidth="sm">
    <Box sx={{ mt: 8 }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form  onSubmit={handleLogin}>
      <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            // value={formData.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            // value={formData.password}
            onChange={handleChange}
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
          Login
        </Button>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </Typography>
        </Box>
      </form>
    </Box>
  </Container>
  )
}

export default Login;

