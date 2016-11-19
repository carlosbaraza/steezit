import React, { Component, PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import CloudUpload from 'material-ui/svg-icons/file/cloud-upload';
import _ from 'lodash';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import toastr from 'toastr';
import { withRouter } from 'react-router';

const styles = {
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { loading } = this.props;

    return (
      <div>
        {(() => {
          if (loading) {
            return (
              <CircularProgress
                size={2}
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  display: 'block',
                }}
              />
            );
          } else {
            return (
              <div>
              </div>
            );
          }
        })()}
      </div>
    );
  }
}

Home.propTypes = {
  gallery: PropTypes.object
};

export default withRouter(Home);
