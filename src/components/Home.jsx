import { useEffect, useState } from 'react';
import axios from 'axios';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import logo from '../images/Logo_Adviz_it.png';
import TopBar from './TopBar';

import HomeCard from './Card';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
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

export default function Home() {
  const [hotels, setHotels] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState();

  useEffect(() => {
    const fetchAllHotels = async () => {
      try {
        setError(null);
        const { data } = await axios.get(
          `http://localhost:5000/api/v1/hotels`
          // {
          //   headers: {
          //     authorization: `Bearer ${token}`,
          //   },
          // }
        );
        setHotels(data);
      } catch (err) {
        setError({ ...err });
      }
    };

    fetchAllHotels();
  }, []);

  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      <TopBar />

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Explorez les plus beaux hôtels du monde, à la recherche de votre
              prochaine destination.
            </Typography>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container justify="center" spacing={4}>
            {hotels.map((hotel) => (
              <HomeCard
                key={hotel.label}
                id={hotel.id}
                label={hotel.label}
                country={hotel.country}
                description={hotel.description}
                image={hotel.picture[0].media}
                rating={hotel.review[0].review}
              />
            ))}
          </Grid>
        </Container>
      </main>
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
