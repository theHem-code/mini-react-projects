import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: 50,
    padding: 100,
    justifyContent: "center",
  },
  bar: {
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    backgroundColor: "black",
    color: "white",
    width: 300,
    borderRadius: 6,
    textAlign: "center",
  },
  actions: {
    justifyContent: "center",
  },
});

const ColorFlipper = () => {
  const [color, setColor] = useState("#ffffff");

  const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);

  const changeBackground = () => {
    setColor(newColor);
  };

  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ backgroundColor: color }}>
      <CardContent className={classes.bar}>
        <Typography className={classes.title}>
          BackgroundColor: {color}
        </Typography>
      </CardContent>

      <CardActions className={classes.actions}>
        <Button variant="contained" onClick={changeBackground} size="medium">
          Change Color
        </Button>
      </CardActions>
    </Card>
  );
};

export default ColorFlipper;
