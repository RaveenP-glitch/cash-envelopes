import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { Box, Paper, Grid, Typography, Button } from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DeleteIcon from "@mui/icons-material/Delete"
import { AppDispatch } from '../store/store';
import { toggleHabit, removeHabit } from '../store/habit-slice';

const HabitList: React.FC = () => {

    const { habits } = useSelector((state: RootState) => state.habits);
    const today = new Date().toISOString().split("T")[0];
    const dispatch = useDispatch<AppDispatch>();

    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 4 }}>
            {habits.map((habit) => {
                return <Paper key={habit.id} elevation={2} sx={{ p: 2 }}>
                    <Grid container alignItems="center">
                        <Grid xs={12} sm={6}>
                            <Typography variant="h6">{habit.name}</Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ textTransform: "capitalize" }}>{habit.frequency}</Typography>
                        </Grid>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
                            <Button
                                variant="outlined"
                                color={
                                    habit.completedDates.includes(today)
                                        ? "success"
                                        : "primary"
                                }
                                startIcon={<CheckCircleIcon />}
                                onClick={() => dispatch(toggleHabit({ id: habit.id, date: today }))}
                            >
                                {habit.completedDates.includes(today)
                                    ? "Completed"
                                    : "Mark Complete"
                                }
                            </Button>
                            <Button
                                variant="outlined"
                                color="error"
                                startIcon={<DeleteIcon />}
                                onClick={() => dispatch(removeHabit({id: habit.id }))}
                            >
                                Remove
                            </Button>
                        </Box>
                    </Grid>
                </Paper>
            })}
        </Box>
    )
}

export default HabitList;