import React from 'react';
import { StyleSheet, Text, View, TabBarIOS, Image } from 'react-native';

import Home from './compoents/page/home';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      selectedTab: 'home'
    };
  }
  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          icon={require('./assets/icon/message.png')}
          title="首页"
          selected={this.state.selectedTab == 'home'}
          onPress={
            () => {
              this.setState({
                selectedTab: 'home'
              })
            }
          }
        >
        <Home></Home>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          style={styles.icon}
          icon={require('./assets/icon/find.png')}
          title="发现"
          selected={this.state.selectedTab == 'find'}
          onPress={
            () => {
              this.setState({
              selectedTab: 'find'
            })
          }}
        >
        <Text>
          2222222222222222
        </Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          style={styles.icon}
          icon={require('./assets/icon/store.png')}
          title="市场"
          selected={this.state.selectedTab == 'store'}
          onPress={
            () => {
              this.setState({
              selectedTab: 'store'
            })
          }}
        >
        <Text>
          333
        </Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          style={styles.icon}
          badge="2"
          icon={require('./assets/icon/notice.png')}
          title="通知"
          selected={this.state.selectedTab == 'notice'}
          onPress={
            () => {
              this.setState({
              selectedTab: 'notice'
            })
          }}
        >
        <Text>
          444
        </Text>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          style={styles.icon}
          icon={require('./assets/icon/more.png')}
          title="更多"
          selected={this.state.selectedTab == 'more'}
          onPress={
            () => {
              this.setState({
              selectedTab: 'more'
            })
          }}
        >
        <Text>
          555
        </Text>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {

  }
});
