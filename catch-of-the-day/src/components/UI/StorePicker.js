import { useRef } from "react";
import { getFunName } from "../../helpers";
import PropTypes from "prop-types";
import classes from "./StorePicker.module.css";

import { TextField, Button, FormControl, Grid } from "@mui/material";

const StorePicker = (props) => {
  const myInput = useRef();

  const goToStore = (event) => {
    event.preventDefault();
    const storeName = myInput.current.value;
    props.history.push(`/store/${storeName}`);
  };

  return (
    <form onSubmit={goToStore}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item>
          <h2>Please enter a store</h2>
        </Grid>
        <Grid item>
          <TextField
            variant="filled"
            ref={myInput}
            type="text"
            required
            label="Store Name"
            defaultValue={getFunName()}
          />
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Visit Store
        </Button>
      </Grid>
    </form>
  );
};

StorePicker.propTypes = {
  history: PropTypes.object,
};

export default StorePicker;
