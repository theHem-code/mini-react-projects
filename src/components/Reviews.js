import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import reviews from "../data/reviews";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    marginTop: 100,
    textAlign: '-webkit-center',
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 14,
  },
  large: {
    width: 100,
    height: 100,
    justifyContent: "center",
  },
  actions: {
    justifyContent: "center",
  },
});

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, img, text } = reviews[index]; // destructure the object

  const classes = useStyles();

  const getForward = () => {
    if (index < reviews.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const getBack = () => {
    if (index <= reviews.length - 1 && index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(reviews.length - 1);
    }
  };

  // need to figure out the getBackward function

  return (
    <div>
      <div className={classes.root}>
        <h2>Our Reviews</h2>
      </div>
      <div>
        <Card className={classes.root}>
          <Avatar alt={name} src={img} className={classes.large} />
          <CardContent>
            <Typography className={classes.title}>{name}</Typography>
            <Typography className={classes.text}>{job}</Typography>
            <Typography className={classes.text}>{text}</Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button size="small">
              <ArrowBackIosIcon onClick={getBack} />
            </Button>
            <Button size="small">
              <ArrowForwardIosIcon onClick={getForward} />
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Reviews;
