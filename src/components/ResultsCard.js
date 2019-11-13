import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {connect} from 'react-redux';
import {setRestaurant} from '../actions/RestaurantActions';

function ImgMediaCard(props) {

    const clickHandler = () => {
        props.setRestaurant(props.object);
        props.history.push(`/restaurants/${props.name}`)
    }

  return (
    <Card className='ResultCard'>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Random Food Image"
          height="180"
          image={props.img}
          title="Random Food Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Ratings: {props.rating}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Pricing: {props.price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Phone: {props.phone}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Address: {props.location}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button onClick={() => clickHandler()} size="small" color="primary">
          More Info
        </Button>
      </CardActions>
    </Card>
  );
}

export default connect(null, {setRestaurant})(ImgMediaCard);