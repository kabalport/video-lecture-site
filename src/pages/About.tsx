import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
        marginTop: '20px',
        marginBottom: '20px',
    },
});

const About = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Typography variant="h4" gutterBottom>
                About Us
            </Typography>
            <Typography variant="body1" paragraph>
                Welcome to Video Lecture Site, the best place to learn anything online. We are a team of dedicated educators and developers working together to create an accessible platform for everyone.
            </Typography>
            <Typography variant="body1" paragraph>
                Our mission is to make learning easy and fun. We believe that everyone has the right to education, and we strive to provide the best quality lectures from experts all around the world.
            </Typography>
        </Container>
    );
}

export default About;
