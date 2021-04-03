import React from "react";
import { Link } from 'react-router-dom'

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const Navbar = () => {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper square>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="ColorFlipper" component={Link} to="/colorflipper" />
        <Tab label="Counter" component={Link} to="/counter" />
        <Tab label="Reviews" component={Link} to="/reviews" />
      </Tabs>
    </Paper>
  );
};

export default Navbar;
