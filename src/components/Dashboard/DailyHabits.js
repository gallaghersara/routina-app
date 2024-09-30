// 2-----------------////////////
// components/DailyHabits.js
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddHabit from "../AddHabit";
import { fetchData, fetchData1 } from "../../services/fechData";

const DailyHabits = () => {
  const [habits, setHabits] = useState([]);
  const [open, setOpen] = useState(false);
  //   const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  //   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  //   const [currentHabit, setCurrentHabit] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = (newHabit) => {
    if (!newHabit) {
      console.error("No habit data received");
      return;
    }
    console.log("Adding new habit to state:", newHabit);
    setHabits((prevHabits) => [...prevHabits, newHabit]);
    setOpen(false);
  };

  //   const handleOpenAddModal = () => {
  //     setIsAddModalOpen(true);
  //   };

  //   const handleCloseAddModal = () => {
  //     setIsAddModalOpen(false);
  //   };

  //   const handleOpenEditModal = (habit) => {
  //     setCurrentHabit(habit);
  //     setIsEditModalOpen(true);
  //   };

  //   const handleCloseEditModal = () => {
  //     setIsEditModalOpen(false);
  //   };

  //   const handleSaveHabit = (updatedHabit) => {
  //     setHabits(
  //       habits.map((habit) =>
  //         habit.id === updatedHabit.id ? updatedHabit : habit
  //       )
  //     );
  //     setIsEditModalOpen(false);
  //   };

  //   const handleDeleteHabit = (id) => {
  //     setHabits(habits.filter((habit) => habit.id !== id));
  //     setIsEditModalOpen(false);
  //   };

  useEffect(() => {
    const getHabits = async () => {
      try {
        const habitsData = await fetchData1("habits");
        console.log("Fetched habits data:", habitsData);
        if (Array.isArray(habitsData)) {
          setHabits(habitsData);
        } else {
          console.error("Fetched habits data is not an array:", habitsData);
          setHabits([]);
        }
      } catch (error) {
        console.error("Error fetching habits:", error);
      }
    };
    getHabits();
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          My Habits
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          New Habit
        </Button>
        <AddHabit open={open} onClose={handleClose} onSave={handleSave} />
        <List>
          {Array.isArray(habits) ? (
            habits.length > 0 ? (
              habits.map((habit) => (
                <ListItem key={habit._id}>
                  <EditIcon color="gray" margin="5px" />
                  {/* <EditIcon
      color="gray"
      onClick={() => handleOpenEditModal(habit)}
    /> */}
                  <ListItemText primary={habit.name} />
                  <Button
                    variant="contained"
                    color={habit.completed ? "success" : "primary"}
                  >
                    {habit.completed ? "Completed" : "Mark as Done"}
                  </Button>
                </ListItem>
              ))
            ) : (
              <Typography variant="body2">
                No habits found. Add a new habit to get started!
              </Typography>
            )
          ) : (
            <Typography variant="body2" color="error">
              Habits data is not in the correct format.
            </Typography>
          )}
        </List>
      </CardContent>
      {/* <Dialog open={isEditModalOpen} onClose={handleCloseEditModal}>
//         <DialogContent>
//           <EditHabit
//             habit={currentHabit}
//             onSave={handleSaveHabit}
//             onDelete={handleDeleteHabit}
//             onClose={handleCloseEditModal}
//           />
//         </DialogContent>
//       </Dialog> */}
    </Card>
  );
};

export default DailyHabits;
