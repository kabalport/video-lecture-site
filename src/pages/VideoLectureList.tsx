import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

interface Lecture {
    id: number;
    title: string;
    description: string;
}

// Dummy lectures data for the example
const lectures: Lecture[] = [
    {
        id: 1,
        title: 'Example Lecture 1',
        description: 'This is an example lecture for the purpose of demonstration.',
    },
    {
        id: 2,
        title: 'Example Lecture 2',
        description: 'This is another example lecture for the purpose of demonstration.',
    },
    // Add more lectures as needed
]

const useStyles = makeStyles({
    root: {
        marginTop: '20px',
        marginBottom: '20px',
    },
});

const VideoLectureList = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Typography variant="h4" gutterBottom>
                Video Lectures
            </Typography>
            <List>
                {lectures.map((lecture) => (
                    <ListItem button key={lecture.id}>
                        <ListItemText
                            primary={lecture.title}
                            secondary={lecture.description}
                        />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

export default VideoLectureList;
