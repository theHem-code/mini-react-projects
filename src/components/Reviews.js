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
    justifyContent: "center",
    textAlign: "center",
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
//   const { name, job, img, text } = reviews[index];

  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <h2>Our Reviews</h2>
      </div>
      <div>
        <Card className={classes.root}>
          <Avatar
            alt="Remy Sharp"
            src={reviews[index]}
            className={classes.large}
          />
          <CardContent>
            <Typography className={classes.title}>Peter Hemsing</Typography>
            <Typography className={classes.text}>Web Development</Typography>
            <Typography className={classes.text}>
              jbwfhj urefv jehrfv uahervf jahvr ugvr ufjyagr uceuryv jahvcjghavs
              fcgj
            </Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button size="small">
              <ArrowBackIosIcon />
            </Button>
            <Button size="small">
              <ArrowForwardIosIcon />
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Reviews;
