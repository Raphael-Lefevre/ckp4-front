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

const useStyles = makeStyles({
  card: {
    display: 'flex',
    width: 300,
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {},
});

export default function Comment({ comment }) {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <Avatar />
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
};
