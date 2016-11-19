import React, { Component } from 'react';

import AppBar from '../components/AppBar.jsx';
import AppFooter from '../components/AppFooter.jsx';

import RoundTreeTheme from '../material-ui-themes/RoundTreeTheme.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// App component - represents the whole app
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      appBarTitle: 'Steezid'
    }
  }

  setAppBarTitle(appBarTitle) {
    this.setState({
      appBarTitle
    });
  }

  render() {
    const {
      // user,
      connected,
      children,
      location,
      gallery,
    } = this.props;

    // clone route components with keys so that they can
    // have transitions
    const clonedChildren = children && React.Children.map(children,
      child => React.cloneElement(child, {
        key: location.pathname,
        setAppBarTitle: this.setAppBarTitle.bind(this),
        gallery
      })
    );

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(RoundTreeTheme)}>
        <div className="container">
          <AppBar
            title={this.state.appBarTitle}
          />

          <div className="content">
            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={200}
              transitionLeaveTimeout={200}
            >
              {clonedChildren}
            </ReactCSSTransitionGroup>
          </div>
          <AppFooter />
        </div>
      </MuiThemeProvider>
    );
  }
}
