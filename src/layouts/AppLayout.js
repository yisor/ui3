import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { TabBar } from 'antd-mobile';
import styles from './AppLayout.css';
import tab_checkin from '../assets/tabbar/tab_checkin.svg';
import tab_dynamic from '../assets/tabbar/tab_dynamic.svg';
import tab_order from '../assets/tabbar/tab_order.svg';


class AppLayout extends PureComponent {

  render() {
    const { children, changeUrl, tab } = this.props;
    return (
      <div className={styles.app}>
        {children}
        <div className={styles.appTab}>
          <TabBar
            unselectedTintColor="#949494"
            barTintColor="white"
            hidden={false}
          >
            <TabBar.Item
              key="checkin"
              title="在线值机"
              icon={<img src={tab_checkin} style={{ width: 22, height: 22 }} alt="" />}
              onPress={() => changeUrl('/')}
            />

            <TabBar.Item
              key="dynamic"
              title="航班动态"
              icon={<img src={tab_dynamic} style={{ width: 22, height: 22 }} alt="" />}
            />

            <TabBar.Item
              key="order"
              title="机票订单"
              icon={<img src={tab_order} style={{ width: 22, height: 22 }} alt="" />}
            />

          </TabBar>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  tab: state.app.tab
});

const mapDispatchToProps = (dispatch) => ({
  changeUrl: (url) => {
    dispatch(routerRedux.push(url));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);
