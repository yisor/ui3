import React, { Component } from 'react';
import { connect } from 'dva';

class UserPage extends Component {
  render() {
    return (
      <div>
        {`用户:${this.props.name}`}
        <div onClick={() => this.props.logout()}>回退</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.app.name,
});

const mapDispathToProps = (dispatch) => ({
  logout: (payload) => {
    dispatch({ type: 'app/logout', payload });
  }
});

export default connect(mapStateToProps, mapDispathToProps)(UserPage);
