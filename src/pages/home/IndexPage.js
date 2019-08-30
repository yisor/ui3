import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import styles from './IndexPage.css';
import Example from '../../components/Example';

class IndexPage extends PureComponent {
  render() {
    return (
      <div className={styles.normal}>
        <div className={styles.title}>
          {this.props.name}
        </div>
        <Example />
        <div className={styles.list} onClick={() => this.props.login('user')}>
          跳转
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  name: state.app.name,
});

const mapDispathToProps = (dispatch) => ({
  changeUrl: (url) => {
    dispatch(routerRedux.push(url));
  },
  login: (payload) => {
    dispatch({ type: 'app/login', payload });
  }
});

export default connect(mapStateToProps, mapDispathToProps)(IndexPage);
