import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

interface Lecture {
    id: number;
    title: string;
    description: string;
    videoUrl: string;
}

// Dummy lecture data for the example
const lecture: Lecture = {
    id: 1,
    title: 'Example Lecture',
    description: 'This is an example lecture for the purpose of demonstration.',
    videoUrl: 'https://example.com',
}

const useStyles = makeStyles({
    root: {
        marginTop: '20px',
        marginBottom: '20px',
    },
});

const VideoLectureDetail = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Typography variant="h4" gutterBottom>
                {lecture.title}
            </Typography>
            <Typography variant="body1" paragraph>
                {lecture.description}
            </Typography>
            <Typography variant="body1" paragraph>
                <a href={lecture.videoUrl}>Watch the video here</a>
            </Typography>
        </Container>
    );
}

export default VideoLectureDetail;
