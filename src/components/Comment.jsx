/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { Avatar } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    margin: theme.spacing(4),
    padding: theme.spacing(2),
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {},
}));

export default function Comment({ comment, rating }) {
  const classes = useStyles();

  return (
    <Grid item xs={10} md={10}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <Avatar />
            <Rating
              name="half-rating-read"
              defaultValue={rating}
              precision={0.1}
              readOnly
            />
            <CardContent>
              <Typography variant="subtitle1" paragraph>
                {comment}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

Comment.propTypes = {
  comment: PropTypes.object,
  rating: PropTypes.number,
};
