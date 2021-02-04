import PropTypes from 'prop-types';

import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Rating from '@material-ui/lab/Rating';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import globalContext from '../context/globalContext';

const useStyles = makeStyles(() => ({
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
}));

export default function HomeCard({
  key,
  id,
  image,
  label,
  rating,
  country,
  description,
}) {
  const { setHotelId } = useContext(globalContext);
  const hotelURL = `/hotel/${id}`;

  const classes = useStyles();
  return (
    <>
      <Grid item key={key} xs={12} sm={9} md={6}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={image}
            title="label"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {label}
            </Typography>
            <Rating
              name="half-rating-read"
              defaultValue={rating}
              precision={0.1}
              readOnly
            />
            <Typography gutterBottom variant="subtitle6" component="h3">
              {country}
            </Typography>
            <Typography>{description}</Typography>
          </CardContent>
          <CardActions>
            <Link to={hotelURL}>
              <Button
                size="small"
                color="primary"
                onClick={() => setHotelId(id)}
              >
                Voir les avis
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </>
  );
}

HomeCard.propTypes = {
  key: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
