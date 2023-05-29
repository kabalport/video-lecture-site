import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import VideoPlayer from "../components/VideoPlayer";

const useStyles = makeStyles({
    root: {
        marginTop: '20px',
        marginBottom: '20px',
    },
});

const Home = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Typography variant="h4" gutterBottom>
                Welcome to Video Lecture Site!
            </Typography>
            <Typography variant="body1" paragraph>
                Our platform offers a variety of online lectures on different topics. Learn at your own pace from experts around the world.
            </Typography>
            <Typography variant="body1" paragraph>
                Browse our lecture library and start learning now!
            </Typography>

            <VideoPlayer url={"https://music.youtube.com/watch?v=Tc4fLM3tHwQ&feature=share"}/>
        </Container>
    );
}

export default Home;
