import React from 'react';
import PropTypes from 'prop-types';
import PredictionList from './PredictionList'
import Input from '@material-ui/core/Input';
import HistoryList from './HistoryList';
import Map from './Map'
import onClickOutside from "react-onclickoutside";
import Paper from '@material-ui/core/Paper';
import '../styles/index.css';
const style = {
  parent: {
    position: 'relative'
  },
  input: {
    padding: 16
  }
}
/*
I can not use this option becuase I used onClickOutside and this npm have open issue with react hook! :(
  
const styles = theme => ({
  root: {
    },
    [theme.breakpoints.up('md')]: {
      .autoComplete {
        z-index: 10;
        position: absolute;
        right:10px;
        top:10px;
        width: 30vw;
      }    },
    [theme.breakpoints.up('lg')]: {
      .autoComplete {
        z-index: 10;
        position: absolute;
        right:10px;
        top:10px;
        width: 30vw;
    }
   },
  },
});
*/


class AutoCompleteInput extends React.Component {
  handleClickOutside = evt => {
    this.props.onBlur();
  };
  render() {
    return (
      <div style={style.parent}>
        <div className="autoComplete">
          <Paper>
            <Input
              style={style.input}
              placeholder="Search your addres"
              fullWidth
              type="text"
              value={this.props.value}
              onChange={e => this.props.onChange(e.target.value)}
              onFocus={this.props.onFocus}
            />
          </Paper>
          {this.props.showHistory ?
            <HistoryList
              list={this.props.userHistory}
              onClick={this.props.selectFromHistory}
            />
            : null}
          {this.props.showPrediction ?
            <PredictionList
              predictions={this.props.sugesstion}
              onSelect={this.props.onSelect}
              location={this.props.location}
            />
            : null}
        </div>
        <Map location={this.props.location} />
      </div>
    )
  }
}


AutoCompleteInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  onFocus: PropTypes.func.isRequired,
  sugesstion: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
  userHistory: PropTypes.array,
  showHistory: PropTypes.bool.isRequired,
  onBlur: PropTypes.func.isRequired,
  selectFromHistory: PropTypes.func.isRequired,
  showPrediction: PropTypes.bool.isRequired
};
AutoCompleteInput.defaultProps = {
  userHistory: [],
}
export default onClickOutside(AutoCompleteInput);
