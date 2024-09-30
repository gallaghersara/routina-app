import logo from './logo.svg';
import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import theme from './theme';
import Login from './components/Login';
import SignUp from './components/Auth/SignUp';
import ProfileCreation from './components/Auth/ProfileCreation';
import Dashboard from './components/Dashboard/Dashboard';
// import AddHabit from './components/Habits/AddHabit';
import ManageHabits from './components/Habits/ManageHabits';
import Friends from './components/Social/Friends';
import AddFriend from './components/Social/AddFriend';
import AddHabit from './components/AddHabit';
import Signin from './components/Auth/SignIn';
import ProtectedRoute from './services/ProtectRoute';
import Header from './components/Header/Header';
// import AddHabit from './components/Habits/AddHabit';
// AddHabit
function App() {


  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/login" element={<Signin />} /> */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
        {/* <Route path="/" exact component={Login} /> */}
         <Route path="/signup" element={<SignUp />} />
        <Route path="/profile-creation" element={<ProfileCreation />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/add-habit" element={<AddHabit />} />
        <Route path="/manage-habits" element={<ManageHabits />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/add-friend" element={<AddFriend />} />
      </Routes>
    </Router>
  </ThemeProvider>
  );
}

export default App;
