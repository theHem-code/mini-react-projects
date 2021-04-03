import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Counter = () => {
const [counter, setCounter] = useState(0)

  const classes = useStyles();
  const myStyle = {
    marginTop: 100,
    textAlign: "center",
  };

  return (
    <div>
      <div style={myStyle}>
        <h3>Counter</h3>
        <h1>{counter}</h1>
        <div className={classes.root}>
          <Button onClick={() => setCounter(counter - 1)} variant="outlined">Decrease</Button>
          <Button onClick={() => setCounter(0)} variant="outlined">Reset</Button>
          <Button onClick={() => setCounter(counter + 1)} variant="outlined">Increase</Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
