import React from 'react';
import PropTypes from 'prop-types';
import Main from '../containers/Main'
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    textAlign: 'center',
  },
});
class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Grid  item xs={10}>
              <h1>Google map search autocomplete example</h1>
            </Grid>
            <Grid item xs={12} container justify="center">
            <Main />
            </Grid>
        </Grid>
        </Grid>
      </Grid>

    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(App);

