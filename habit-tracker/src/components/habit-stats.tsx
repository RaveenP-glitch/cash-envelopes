import React, { useEffect } from 'react';
import { useDispatch, UseDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { AppDispatch } from '../store/store';
import { fetchHabits } from '../store/habit-slice';
import { Paper, Typography, LinearProgress } from '@mui/material';
import { Habit } from '../store/habit-slice';

const HabitStats: React.FC = () => {

    const { habits, isLoading, error } = useSelector(
        (state: RootState) => state.habits
    );
    const dispatch = useDispatch<AppDispatch>();
    const today = new Date().toISOString().split("T")[0];

    useEffect(() => {
        dispatch(fetchHabits())
    }, [])

    if (isLoading) {
        return <LinearProgress />;
    }

    if (error) {
        return <Typography color="error">{error}</Typography>
    }

    const getCompletedCount = (habits: Habit[]) => {
        let count = 0; 
        for(let i =0; i < habits.length; i++){
            if(habits[i].completedDates.includes(today)){
                count++;
            }
        }
        return count;
    }

    const getLongestStreak = (habits: Habit[]) => {
        let maxStreak = 0;
        habits.forEach((element, index) =>{
                let streak = 0;
                const currentDate = new Date();
        
                while(true) {
                    const dateString= currentDate.toISOString().split("T")[0];
                    if(element.completedDates.includes(dateString)){
                        streak++;
                        currentDate.setDate(currentDate.getDate() - 1);
                    }else{
                        break;
                    }
                }
                if( maxStreak < streak ) {
                    maxStreak = streak;
                }
        })
        return maxStreak;
    }

    return (
        <div>
            <Paper elevation={2} sx={{ p: 2, mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                    Habit Statistics
                </Typography>
                <Typography variant="body1">
                    Total Habits: {habits.length}
                </Typography>
                <Typography variant="body1">
                    Completed Today: {getCompletedCount(habits)}
                </Typography>
                <Typography variant="body1">
                    Longest Streak: {getLongestStreak(habits)}
                </Typography>
            </Paper>
        </div>
    )
}

export default HabitStats;