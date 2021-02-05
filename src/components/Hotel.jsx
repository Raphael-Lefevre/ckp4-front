import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import logo from '../images/Logo_Adviz_it.png';
import { Card, CardMedia } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import TopBar from './TopBar';

import globalContext from '../context/globalContext';
import Comment from './Comment';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(10),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    height: '100%',
    width: '100%',
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Hotel() {
  const [hotel, setHotel] = useState();
  const [error, setError] = useState();
  const { hotelId } = useContext(globalContext);

  useEffect(() => {
    const fetchHotel = async () => {
      try {
        setError(null);
        const { data } = await axios.get(
          `http://localhost:5000/api/v1/hotels/${hotelId}`
        );
        setHotel(data);
      } catch (err) {
        setError({ ...err });
        console.log(error);
      }
    };

    fetchHotel();
  }, []);

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <TopBar />
      {hotel && (
        <>
          <main>
            <Container className={classes.cardGrid} maxWidth="md">
              <Grid container justify="center" spacing={4}>
                <Card className={classes.card}>
                  <CardMedia
                    label={hotel.label}
                    image={hotel.picture[0].media}
                  />
                </Card>
              </Grid>
            </Container>
            <Container className={classes.cardGrid} maxWidth="md">
              <Grid container justify="center" spacing={4} elevation={2}>
                <Typography gutterBottom variant="h5" component="h2">
                  {hotel.label}
                </Typography>
                <Rating
                  name="half-rating-read"
                  defaultValue={hotel.review[0].review}
                  precision={0.1}
                  readOnly
                />
                <Typography gutterBottom variant="subtitle6" component="h3">
                  {hotel.country}
                </Typography>
                <Typography>{hotel.description}</Typography>
              </Grid>
            </Container>
            {hotel.review.map((item) => {
              return <Comment comment={item.comment} rating={item.review} />;
            })}
          </main>
        </>
      )}
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
      </footer>
      {/* End footer */}
    </>
  );
}
